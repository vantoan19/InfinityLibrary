from fastapi import APIRouter
from server.api.v1.router import user

apiv1_router = APIRouter()
apiv1_router.include_router(user.router, prefix="/users", tags=["users"])
