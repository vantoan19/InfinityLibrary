from fastapi import UploadFile
from dataclasses import dataclass
from pydantic import BaseModel
from enum import Enum
from typing import List
from server.core.models import BookStatus
from .user import User


class BookBase(BaseModel):
    title: str | None = None
    description: str | None = None
    published_year: int | None = None
    author: str | None = None
    pages: int | None = None
    price: int | None = None

    status: BookStatus | None = None


class BookSort(str, Enum):
    default = "default"
    price_asc = "price-asc"
    price_desc = "price-desc"
    timestamp_asc = "time-asc"
    timestamp_desc = "time-desc"
    votes = "votes"


class Book(BookBase):
    id: int
    user_id: int
    title: str
    description: str
    published_year: int
    user: User
    book_condition: str = "Newly open"
    view: int = 0

    class Config:
        orm_mode = True
        allow_population_by_field_name = True


class BookCreate(BookBase):
    title: str
    price: int
    author: str = "Unknown"
    published_year: int
    pages: int
    status: BookStatus = BookStatus.AVAILABLE
    book_category: List[str]
    user_id: int


class BookUpdate(BookBase):
    pass
