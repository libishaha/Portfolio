from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.database import Base, engine
from app.routers import projects, contact

# Create all database tables on startup
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Libisha Sherani Portfolio API",
    description="Backend API for Libisha's developer portfolio",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# ─── CORS ─────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Routers ──────────────────────────────────────────────────────────────────
app.include_router(projects.router)
app.include_router(contact.router)


# ─── Health check ─────────────────────────────────────────────────────────────
@app.get("/")
def root():
    return {"status": "ok", "message": "Libisha Portfolio API is running"}


@app.get("/health")
def health():
    return {"status": "healthy"}
