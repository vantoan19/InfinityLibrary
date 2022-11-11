from pydantic import BaseModel


class AddressBase(BaseModel):
    street_line_1: str | None = None
    street_line_2: str | None = None
    postal_code: str | None = None
    district: str | None = None
    city: str | None = None
    region: str | None = None
    country: str | None = None
    longitude: str | None = None
    latitude: str | None = None


class AddressCreate(AddressBase):
    pass


class AddressUpdate(AddressBase):
    pass


class Address(BaseModel):
    street_line_1: str | None
    street_line_2: str | None
    postal_code: str | None
    district: str | None
    city: str | None
    region: str | None
    country: str | None
    longitude: str | None
    latitude: str | None

    class Config:
        orm_mode = True


class AddressWithId(BaseModel):
    address_id: int

    class Config:
        orm_mode = True
