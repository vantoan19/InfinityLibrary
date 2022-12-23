from fastapi import APIRouter, Depends, HTTPException, status
from server.core import schemas
from server.api import get_db
from sqlalchemy.orm import Session
from server.crud import vote_crud
from typing import List


router = APIRouter()


@router.get("/votes", response_model=list[schemas.Vote])
def get_votes(*, db: Session = Depends(get_db), skip: int = 0, limit: int = 10000000):
    votes = vote_crud.get_multi(db=db, skip=skip, limit=limit)
    return votes


@router.post("/", response_model=schemas.Vote, status_code=status.HTTP_201_CREATED)
def create_post(*, db: Session = Depends(get_db), vote_info: schemas.VoteCreate):
    vote = vote_crud.create(db=db, obj_in=vote_info)
    return vote


@router.get("/votes/from", response_model=list[schemas.Vote])
def get_votes_from(*, db: Session = Depends(get_db), user_id: int):
    is_user = lambda x: x.from_user == user_id  # noqa: E731
    votes = votes = vote_crud.get_multi(db=db)
    votes = list(filter(is_user, votes))
    return votes


@router.get("/votes/to", response_model=list[schemas.Vote])
def get_votes_to(*, db: Session = Depends(get_db), user_id: int):
    is_user = lambda x: x.to_user == user_id  # noqa: E731
    votes = votes = vote_crud.get_multi(db=db)
    votes = list(filter(is_user, votes))
    return votes
