from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from server.api import get_db
from server.core import schemas
from server.crud import user_crud
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/{id}", response_model=schemas.User)
def read_user(*, db: Session = Depends(get_db), id: int) -> Any:
    user = user_crud.get(db=db, id=id)
    if not user:
        raise HTTPException(status_code=404, detail="user not found")
    return user


@router.get("/", response_model=List[schemas.User])
def read_users(*, db: Session = Depends(get_db), skip: int = 0, limit: int = 10000000):
    users = user_crud.get_multi(db=db, skip=skip, limit=limit)
    return users


@router.post("/", response_model=schemas.User, status_code=status.HTTP_201_CREATED)
def create_user(*, db: Session = Depends(get_db), user_info: schemas.UserCreate):
    user = user_crud.create(db=db, user_info=user_info)
    return user
