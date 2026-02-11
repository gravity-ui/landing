import io
import json
import logging

import numpy as np
import open_clip
import torch
from PIL import Image

from app.config import (
    CLIP_MODEL,
    CLIP_PRETRAINED,
    EMBEDDINGS_PATH,
    INDEX_PATH,
)

logger = logging.getLogger(__name__)

_model = None
_preprocess = None
_embeddings: torch.Tensor | None = None
_icon_index: list[dict] | None = None


def load_model():
    global _model, _preprocess
    logger.info("Loading CLIP model %s (pretrained=%s)...", CLIP_MODEL, CLIP_PRETRAINED)
    _model, _, _preprocess = open_clip.create_model_and_transforms(
        CLIP_MODEL,
        pretrained=CLIP_PRETRAINED,
        device="cpu",
    )
    _model.eval()
    logger.info("CLIP model loaded.")


def load_embeddings():
    global _embeddings, _icon_index
    logger.info("Loading embeddings from %s", EMBEDDINGS_PATH)
    raw = np.load(str(EMBEDDINGS_PATH))
    _embeddings = torch.from_numpy(raw).float()
    with open(INDEX_PATH) as f:
        _icon_index = json.load(f)
    logger.info("Loaded %d icon embeddings.", _embeddings.shape[0])


def search(image_bytes: bytes, top_k: int = 12) -> list[dict]:
    if _model is None or _preprocess is None:
        raise RuntimeError("Model not loaded")
    if _embeddings is None or _icon_index is None:
        raise RuntimeError("Embeddings not loaded")

    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    tensor = _preprocess(img).unsqueeze(0)

    with torch.no_grad():
        query = _model.encode_image(tensor)
        query /= query.norm(dim=-1, keepdim=True)

    scores = (query @ _embeddings.T).squeeze(0)
    top_indices = scores.argsort(descending=True)[:top_k]

    return [
        {
            **_icon_index[i],
            "score": round(scores[i].item(), 4),
        }
        for i in top_indices.tolist()
    ]
