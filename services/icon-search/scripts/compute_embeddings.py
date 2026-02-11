"""Compute CLIP embeddings for all rendered icon PNGs.

Run from services/icon-search/:
    python scripts/compute_embeddings.py
"""

import json
import sys
from pathlib import Path

import numpy as np
import open_clip
import torch
from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent.parent.parent
METADATA_PATH = REPO_ROOT / "node_modules" / "@gravity-ui" / "icons" / "metadata.json"

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
RENDERED_DIR = DATA_DIR / "rendered_icons"
EMBEDDINGS_PATH = DATA_DIR / "embeddings.npy"
INDEX_PATH = DATA_DIR / "icon_index.json"

CLIP_MODEL = "ViT-B-32"
CLIP_PRETRAINED = "openai"


def main():
    if not RENDERED_DIR.exists() or not any(RENDERED_DIR.iterdir()):
        print(f"No rendered icons found in {RENDERED_DIR}")
        print("Run render_svgs.py first.")
        sys.exit(1)

    with open(METADATA_PATH) as f:
        metadata = json.load(f)

    print(f"Loading CLIP model {CLIP_MODEL}...")
    model, _, preprocess = open_clip.create_model_and_transforms(
        CLIP_MODEL,
        pretrained=CLIP_PRETRAINED,
        device="cpu",
    )
    model.eval()
    print("Model loaded.")

    icon_index = []
    embeddings = []
    skipped = 0

    icons = metadata["icons"]
    total = len(icons)

    for i, icon in enumerate(icons):
        svg_name = icon["svgName"]
        png_path = RENDERED_DIR / f"{svg_name}.png"

        if not png_path.exists():
            skipped += 1
            continue

        img = Image.open(png_path).convert("RGB")
        tensor = preprocess(img).unsqueeze(0)

        with torch.no_grad():
            emb = model.encode_image(tensor)
            emb /= emb.norm(dim=-1, keepdim=True)

        embeddings.append(emb.squeeze(0).numpy())
        icon_index.append({
            "name": icon["name"],
            "componentName": icon["componentName"],
            "style": icon["style"],
        })

        if (i + 1) % 100 == 0 or i + 1 == total:
            print(f"  [{i + 1}/{total}] processed")

    embeddings_array = np.stack(embeddings)
    np.save(str(EMBEDDINGS_PATH), embeddings_array)

    with open(INDEX_PATH, "w") as f:
        json.dump(icon_index, f, indent=2)

    print(f"\nDone: {len(icon_index)} embeddings computed, {skipped} skipped.")
    print(f"Embeddings shape: {embeddings_array.shape}")
    print(f"Embeddings size: {embeddings_array.nbytes / 1024:.1f} KB")
    print(f"Saved to: {EMBEDDINGS_PATH}")
    print(f"Index saved to: {INDEX_PATH}")


if __name__ == "__main__":
    main()
