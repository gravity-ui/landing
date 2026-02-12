# Icon Search

Visual search for icons from `@gravity-ui/icons` using [CLIP](https://openai.com/research/clip) (model `Xenova/clip-vit-base-patch32`).

A user uploads an image, and the system finds the most visually similar icons.

## How it works

### Precomputation (build time)

The script `run.ts` prepares the data needed for search:

1. **Render SVGs to PNGs** (`render-svgs.ts`) — each SVG icon from `@gravity-ui/icons` is rendered to a 224×224 PNG (160px icon centered on a white background) using `sharp`.

2. **Compute embeddings** (`compute-embeddings.ts`) — each PNG is passed through the CLIP vision encoder (`@huggingface/transformers`). The resulting 512-dimensional vectors are normalized and saved to `public/static/icons-embeddings.json`.

The script checks the installed version of `@gravity-ui/icons` against `data/icons_version.txt` and skips the work if the version hasn't changed.

```
npx tsx scripts/icon-search/run.ts
```

### Inference (runtime)

The API route `src/pages/api/icons-search.ts` accepts a base64-encoded image via POST and returns the most similar icons.

The model module (`src/api/icon-search-model.ts`) lazily loads the CLIP model and the precomputed embeddings on first request. It encodes the uploaded image, normalizes the resulting vector, and computes cosine similarity against all icon embeddings to find the top matches.

```
POST /api/icons-search
{ "image": "<base64>", "topK": 12 }
→ { "results": [{ "name": "...", "componentName": "...", "style": "...", "score": 0.95 }] }
```

## File structure

```
scripts/icon-search/
  run.ts                  — entry point, checks version and orchestrates the pipeline
  render-svgs.ts          — SVG → 224×224 PNG
  compute-embeddings.ts   — PNG → CLIP embeddings → JSON
  constants.ts            — shared paths
  data/
    rendered_icons/       — intermediate PNGs (gitignored)
    icons_version.txt     — last processed @gravity-ui/icons version

public/static/
  icons-embeddings.json   — precomputed embeddings + icon index

src/api/
  icon-search-model.ts    — CLIP model singleton, search()

src/pages/api/
  icons-search.ts         — Next.js API route
```

## Dependencies

- `@huggingface/transformers` — CLIP model inference (ONNX runtime)
- `sharp` — SVG rendering (bundled with `@huggingface/transformers`)
