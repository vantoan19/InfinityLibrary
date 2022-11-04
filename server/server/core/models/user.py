import enum

from server.core.db import Base
from sqlalchemy import Column, DateTime, Enum, Integer, String
from sqlalchemy.orm import relationship


class UserType(enum.Enum):
    ADMIN = "admin"
    USER = "user"


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True)
    account_type = Column(Enum(UserType), default=UserType.USER)
    phone_number = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, nullable=True)
    password = Column(String, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    profile_img_url = Column(String)
    created_at = Column(DateTime)
    modified_at = Column(DateTime)

    address = relationship("Address")
