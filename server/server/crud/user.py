import logging

from fastapi import HTTPException
from fastapi.encoders import jsonable_encoder
from server.core import models, schemas
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from .base import CRUDBase

logging.basicConfig(level=logging.DEBUG, format="%(process)d-%(levelname)s-%(message)s")


class CRUDUser(CRUDBase[models.User, schemas.UserCreate, schemas.AddressUpdate]):
    def create(self, db: Session, *, user_info: schemas.UserCreate) -> models.User:

        logging.info(f"CRUDUser: Start creating user with user_info\={user_info}")
        user_info_data = jsonable_encoder(user_info)

        address = models.Address(**user_info_data["address"])
        user_info_data.pop("address")
        user = models.User(**user_info_data)
        user.address = [address]

        try:
            db.add_all([address, user])
            db.commit()
            db.refresh(user)

            logging.info(
                f"CRUDUser: End creating user with user_info\={user_info}: Successful"
            )
            return user
        except SQLAlchemyError:
            logging.error(
                f"CRUDUser: End creating with schema\={user_info}: Error",
                exc_info=True,
            )
            db.rollback()
            raise HTTPException(
                status_code=500,
                detail=f"{type(self).__name__}: Error when creating User",
            )


user_crud = CRUDUser(models.User)
