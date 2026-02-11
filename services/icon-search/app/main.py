import base64
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.config import ALLOWED_ORIGINS, DEFAULT_TOP_K, MAX_TOP_K
from app.model import load_embeddings, load_model, search

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_app: FastAPI):
    load_model()
    load_embeddings()
    yield


app = FastAPI(title="Icon Search", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)


class SearchRequest(BaseModel):
    image: str = Field(description="Base64-encoded image")
    top_k: int = Field(default=DEFAULT_TOP_K, ge=1, le=MAX_TOP_K)


class SearchResultItem(BaseModel):
    name: str
    componentName: str
    style: str
    score: float


class SearchResponse(BaseModel):
    results: list[SearchResultItem]


@app.post("/search", response_model=SearchResponse)
async def search_icons(req: SearchRequest):
    try:
        image_bytes = base64.b64decode(req.image)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid base64 image")

    try:
        results = search(image_bytes, req.top_k)
    except Exception:
        logger.exception("Search failed")
        raise HTTPException(status_code=500, detail="Search failed")

    return SearchResponse(results=results)


@app.get("/health")
async def health():
    return {"status": "ok"}
