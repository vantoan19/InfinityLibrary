import enum

from server.core.db import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Enum
from sqlalchemy.orm import relationship


class BookStatus(enum.Enum):
    AVAILABLE = "AVAILABLE"
    OCCUPIED = "OCCUPIED"
    DELETED = "DELETED"


class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True)
    category = Column(String(50))
    book_category = relationship("Book_category", back_populates="category")


class Book_category(Base):
    __tablename__ = "book_categories"
    id = Column(Integer, primary_key=True)
    book_id = Column(Integer, ForeignKey("books.id"))
    category_id = Column(Integer, ForeignKey("categories.id"))

    book = relationship("Book", back_populates="book_category")
    category = relationship("Category", back_populates="book_category")


# class Book_cover_image(Base):
#     __tablename__ = "coverimage"
#     id = Column(Integer, priamry_key=True)
#     book_id = Column(Integer,ForeignKey("books.id"))
#     url = Column(String, nullable=False, unique=True)

#     book = relationship("Book", back_populates="cover_images")


class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String, nullable=False)
    description = Column(String)
    published_year = Column(Integer, nullable=False)
    author = Column(String(100), default="Unknown")
    pages = Column(Integer)
    status = Column(Enum(BookStatus), default=BookStatus.AVAILABLE)
    price = Column(Integer)

    # cover_images = relationship("Book_cover_image", back_populates="book")
    user = relationship("User", back_populates="books")
    book_category = relationship("Book_category", back_populates="book")
