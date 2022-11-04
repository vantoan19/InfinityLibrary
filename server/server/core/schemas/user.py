from pydantic import BaseModel
from server.core.models import UserType

from .address import Address, AddressCreate, AddressUpdate


class UserBase(BaseModel):
    account_type: UserType | None = None
    phone_number: str | None = None
    email: str | None = None
    password: str | None = None
    first_name: str | None = None
    last_name: str | None = None
    profile_img_url: str | None = None
    created_at: str | None = None
    modified_at: str | None = None


class UserCreate(UserBase):
    account_type: UserType = UserType.USER
    phone_number: str
    password: str
    first_name: str
    last_name: str
    address: AddressCreate


class UserUpdate(UserBase):
    address: AddressUpdate | None = None


class User(UserBase):
    user_id: int
    address: Address

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
