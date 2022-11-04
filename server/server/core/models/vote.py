import enum

from server.core.db import Base
from sqlalchemy import Column, Enum, ForeignKey, Integer, String


class VoteType(enum.Enum):
    BOOK_OWNER = "BOOK_OWNER"  # Vote from renter to book owner
    BOOK_RENTER = "BOOK_RENTER"  # Vote from book owner to renter


class Vote(Base):
    __tablename__ = "votes"

    vote_id = Column(Integer, primary_key=True)
    vote_type = Column(Enum(VoteType), nullable=False)
    from_user = Column(Integer, ForeignKey("users.user_id"))
    to_user = Column(Integer, ForeignKey("users.user_id"))
    points = Column(Integer, nullable=False)
    message = Column(String)
