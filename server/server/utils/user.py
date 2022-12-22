from server.core.schemas import User
import logging

logging.basicConfig(level=logging.DEBUG, format="%(process)d-%(levelname)s-%(message)s")


def modify_user(user: User):
    print(user)

    address = user.address[0].city + ", " + user.address[0].country
    modified_user = {
        "id": user.id,
        "username": user.username,
        "avatar": {"uri": user.profile_img_url},
        "location": address,
        "rated": 1,
    }
    return modified_user
