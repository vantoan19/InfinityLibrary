import logging

from fastapi.encoders import jsonable_encoder
from server.core import models, schemas
from sqlalchemy.orm import Session

from .base import CRUDBase

logging.basicConfig(level=logging.DEBUG, format="%(process)d-%(levelname)s-%(message)s")


class CRUDUser(CRUDBase[models.User, schemas.UserCreate, schemas.AddressUpdate]):
    def create(self, db: Session, *, user_info: schemas.UserCreate) -> models.User:
        logging.info(f"CRUDUser: Start creating user with user_info\={user_info}")

        user_info_data = jsonable_encoder(user_info)

        user = models.User(**user_info_data)
