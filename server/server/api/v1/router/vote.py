from fastapi import APIRouter, Depends, HTTPException, status
from server.core import schemas
from server.api import get_db
from sqlalchemy.orm import Session
from server.crud import vote_crud
from typing import List


router = APIRouter()


@router.get("/votes", response_model=list[schemas.VoteCreate])
def get_votes(*, db: Session = Depends(get_db), skip: int = 0, limit: int = 10000000):
    votes = vote_crud.get_multi(db=db, skip=skip, limit=limit)
    return votes


# @router.post("/", respone_model = schemas.VoteCreate, status_code=status.HTTP_201_CREATED)
# def create_post(*, db: Session = Depends(get_db), vote_info: schemas.VoteCreate):
#     vote = vote_crud.create(db=db, obj_in=vote_info)
#     return vote

# @router.get("/votes/from", respose_model = list[schemas.VoteCreate])
# def get_votes_from(*, db: Session = Depends(get_db), user_id: int):


#     is_user = lambda vote: vote.
#     votes = votes = vote_crud.get_multi(db=db)
#     votes = list(filter())
