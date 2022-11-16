import logging

from fastapi import HTTPException
from fastapi.encoders import jsonable_encoder
from server.core import models, schemas
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from .base import CRUDBase

logging.basicConfig(level=logging.DEBUG, format="%(process)d-%(levelname)s-%(message)s")


class CRUDBook(CRUDBase[models.Book, schemas.BookCreate, schemas.AddressUpdate]):
   def create(self, db: Session, *, book_info: schemas.BookCreate) -> models.Book:

        logging.info(f"CRUDBook: Start creating book with book_info={book_info}")
        book_data = jsonable_encoder(book_info)

        book_data.pop("book_category")

        book = models.Book(**book_data)

        try:
            db.add_all([book])
            db.commit()
            db.refresh(book)

            logging.info(
                f"CRUDBook: End creating book with book_info={book_info}: Successful"
            )
            return book
        except SQLAlchemyError:
            logging.error(
                f"CRUDBook: End creating book schema={book_info}: Error",
                exc_info=True,
            )
            db.rollback()
            raise HTTPException(
                status_code=500,
                detail=f"{type(self).__name__}: Error when creating Book",
            )
   pass

book_crud = CRUDBook(models.Book)
