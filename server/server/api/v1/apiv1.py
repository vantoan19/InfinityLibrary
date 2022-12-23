from fastapi import APIRouter
from server.api.v1.router import user
from server.api.v1.router import book
from server.api.v1.router import vote


apiv1_router = APIRouter()
apiv1_router.include_router(user.router, prefix="/users", tags=["users"])
apiv1_router.include_router(book.router, prefix="/books", tags=["books"])
apiv1_router.include_router(vote.router, prefix="/votes", tags=["votes"])
