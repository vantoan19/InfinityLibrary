from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from server.api.v1 import apiv1_router

app = FastAPI(docs_url="/api/v1/docs", openapi_url="/api/v1/openapi.json")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(apiv1_router, prefix="/api/v1")


@app.get("/api/v1/")
def root():
    return {"message": "Hello World"}
