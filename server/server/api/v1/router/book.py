from fastapi import APIRouter, Depends, HTTPException, status
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


@router.post("/", response_model=schemas.Book, status_code=status.HTTP_201_CREATED)
async def create_book(*, db: Session = Depends(get_db), new_book: schemas.BookCreate):
    book = book_crud.create(db=db, book_info=new_book)
    return book


@router.delete("/", response_model=schemas.Book)
async def remove_book(*, db: Session = Depends(get_db), id: int):
    book = book_crud.remove(db, id=id)
    return book


@router.put("/", response_model=schemas.Book)
async def update_book(
    *, db: Session = Depends(get_db), id: int, change_info: schemas.BookUpdate
):
    book = book_crud.get(db, id=id)
    book = book_crud.update(db=db, db_obj=book, obj_in=change_info)
    return book
