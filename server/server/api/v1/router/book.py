from fastapi import APIRouter, Depends, HTTPException
from server.core import schemas
from server.api import get_db
from sqlalchemy.orm import Session
from server.crud import book_crud
from typing import List


router = APIRouter()


@router.get("/all", response_model=List[schemas.Book])
async def get_all_book(*, db: Session = Depends(get_db), sort: schemas.BookSort):
    books = book_crud.get_multi(db)
    return books


@router.get("/by_id", response_model=schemas.Book)
async def get_book_by_id(*, db: Session = Depends(get_db), book_id: int):
    book = book_crud.get(db, id=book_id)
    if not book:
        raise HTTPException(status_code=404, detail="book not found")

    return book


@router.post("/", response_model=schemas.Book)
async def create_book(*, db: Session = Depends(get_db), new_book: schemas.BookCreate):
    book = book_crud.create(db=db, book_info=new_book)
    return book
