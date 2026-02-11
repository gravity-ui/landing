import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DATA_DIR = Path(os.environ.get("DATA_DIR", str(BASE_DIR / "data")))
EMBEDDINGS_PATH = DATA_DIR / "embeddings.npy"
INDEX_PATH = DATA_DIR / "icon_index.json"

CLIP_MODEL = os.environ.get("CLIP_MODEL", "ViT-B-32")
CLIP_PRETRAINED = os.environ.get("CLIP_PRETRAINED", "openai")

DEFAULT_TOP_K = 12
MAX_TOP_K = 50

ALLOWED_ORIGINS = os.environ.get(
    "ALLOWED_ORIGINS",
    "https://gravity-ui.com,http://localhost:3000",
).split(",")

PORT = int(os.environ.get("PORT", "8080"))
