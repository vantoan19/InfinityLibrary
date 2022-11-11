from server.core.db import Base
from sqlalchemy import Column, ForeignKey, Integer, String


class Address(Base):
    __tablename__ = "addresses"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    street_line_1 = Column(String)
    street_line_2 = Column(String)
    postal_code = Column(String)
    district = Column(String)
    city = Column(String)
    region = Column(String)
    country = Column(String)
    longitude = Column(String)
    latitude = Column(String)
