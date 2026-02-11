"""Render all SVG icons from @gravity-ui/icons to 224x224 PNG files.

Requires cairosvg: pip install cairosvg
Run from services/icon-search/:
    python scripts/render_svgs.py
"""

import json
import sys
from pathlib import Path

import cairosvg
from PIL import Image
import io

REPO_ROOT = Path(__file__).resolve().parent.parent.parent.parent
SVGS_DIR = REPO_ROOT / "node_modules" / "@gravity-ui" / "icons" / "svgs"
METADATA_PATH = REPO_ROOT / "node_modules" / "@gravity-ui" / "icons" / "metadata.json"
OUTPUT_DIR = Path(__file__).resolve().parent.parent / "data" / "rendered_icons"

TARGET_SIZE = 224
ICON_SIZE = 160  # icon size within the 224x224 canvas (leaves padding)


def render_svg_to_png(svg_path: Path, output_path: Path) -> None:
    """Render an SVG to a 224x224 PNG with white background and centered icon."""
    png_bytes = cairosvg.svg2png(
        url=str(svg_path),
        output_width=ICON_SIZE,
        output_height=ICON_SIZE,
    )

    icon = Image.open(io.BytesIO(png_bytes)).convert("RGBA")

    canvas = Image.new("RGB", (TARGET_SIZE, TARGET_SIZE), (255, 255, 255))

    offset = (TARGET_SIZE - ICON_SIZE) // 2
    canvas.paste(icon, (offset, offset), mask=icon)

    canvas.save(output_path, "PNG")


def main():
    if not SVGS_DIR.exists():
        print(f"SVGs directory not found: {SVGS_DIR}")
        print("Make sure node_modules are installed (npm install).")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with open(METADATA_PATH) as f:
        metadata = json.load(f)

    icons = metadata["icons"]
    total = len(icons)
    rendered = 0
    skipped = 0

    for i, icon in enumerate(icons):
        svg_name = icon["svgName"]
        svg_path = SVGS_DIR / f"{svg_name}.svg"

        if not svg_path.exists():
            print(f"  SKIP: {svg_name}.svg not found")
            skipped += 1
            continue

        output_path = OUTPUT_DIR / f"{svg_name}.png"
        render_svg_to_png(svg_path, output_path)
        rendered += 1

        if (i + 1) % 100 == 0 or i + 1 == total:
            print(f"  [{i + 1}/{total}] rendered")

    print(f"\nDone: {rendered} rendered, {skipped} skipped.")
    print(f"Output: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
