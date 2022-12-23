import logging

from fastapi import HTTPException, status
from fastapi.encoders import jsonable_encoder
from server.core import models, schemas
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from .base import CRUDBase

logging.basicConfig(level=logging.DEBUG, format="%(process)d-%(levelname)s-%(message)s")


class CRUDVote(CRUDBase[models.Vote, schemas.VoteCreate, schemas.VoteUpdate]):
    pass


vote_crud = CRUDVote(models.Vote)
