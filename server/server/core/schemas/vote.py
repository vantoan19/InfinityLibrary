from pydantic import BaseModel
from server.core.models import VoteType

# vote_id = Column(Integer, primary_key=True)
# vote_type = Column(Enum(VoteType), nullable=False)
# from_user = Column(Integer, ForeignKey("users.user_id"))
# to_user = Column(Integer, ForeignKey("users.user_id"))
# points = Column(Integer, nullable=False)
# message = Column(String)


class VoteBase(BaseModel):
    vote_type: VoteType
    from_user: int
    to_user: int
    points: int
    message: str | None = None


class VoteCreate(VoteBase):
    pass


# FYI: Vote cannot be updated.
class VoteUpdate(BaseModel):
    pass


class Vote(VoteBase):
    class Config:
        orm_mode = True
        allow_population_by_field_name = True

    pass
