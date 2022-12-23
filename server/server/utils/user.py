from server.core.schemas import User, Vote
from fastapi import Depends
from server.api.v1.router import get_votes_to
from server.api import get_db
from sqlalchemy.orm import Session
import logging

logging.basicConfig(level=logging.DEBUG, format="%(process)d-%(levelname)s-%(message)s")


def modify_user(user: User, db: Session):
    address = user.address[0].city + ", " + user.address[0].country
    id = user.id
    votes = get_votes_to(db=db, user_id=id)
    sum_of_point = sum(list(map(lambda x: x.points, votes)))  # noqa: E731
    avg_point = 0 if len(votes) == 0 else (sum_of_point / len(votes))

    modified_user = {
        "id": user.id,
        "username": user.username,
        "avatar": {"uri": user.profile_img_url},
        "location": address,
        "rated": avg_point,
    }
    return modified_user
