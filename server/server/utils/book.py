from fastapi.encoders import jsonable_encoder
from server.core import schemas
from server.core import models


def modify_book(book: models.book):
    book_mod = schemas.Book(
        id=book.id,
        user_id=book.user_id,
        image_covers=[{"uri": book.book_image_url}],
        title=book.title,
        description=book.description,
        published_year=book.published_year,
        author=book.author,
        pages=book.pages,
        price=book.price,
        status=book.status,
    )
    return book_mod
