from fastapi.testclient import TestClient
from server.main import app
from unittest import TestCase
from operator import itemgetter


class TestUserApi:

    client = TestClient(app)

    users_info = [
        {
            "account_type": "USER",
            "phone_number": "+36105474523",
            "email": "test@email.com",
            "password": "testpassword@a..",
            "first_name": "John",
            "last_name": "Snow",
            "profile_img_url": "testurl.com",
            "address": {
                "street_line_1": "Joszef korut 85",
                "postal_code": "1085",
                "district": "V",
                "city": "Budapest",
                "region": "Budapest",
                "country": "Hungary",
                "longitude": "17''231314''32424",
                "latitude": "1284'423524'12312",
            },
        },
        {
            "account_type": "ADMIN",
            "phone_number": "+36205474523",
            "email": "admin@email.com",
            "password": "testpassword@a..",
            "first_name": "Admin",
            "last_name": "Nguyen",
            "profile_img_url": "testurl.com",
            "address": {
                "street_line_1": "Sofia utca 23",
                "postal_code": "1065",
                "district": "VI",
                "city": "Budapest",
                "region": "Budapest",
                "country": "Hungary",
                "longitude": "163''2313''325344",
                "latitude": "12845'423524'12312",
            },
        },
    ]

    def test_create_users_success(self):
        for user_info in self.users_info:
            user_response = self.client.post("/api/v1/users/", json=user_info)
            user_data = user_response.json()

            assert user_response.status_code == 201
            assert user_info["phone_number"] == user_data["phone_number"]
            assert user_info["email"] == user_data["email"]
            assert user_info["first_name"] == user_data["first_name"]
            assert user_info["last_name"] == user_data["last_name"]

    def test_get_multi_users_success(self):
        response = self.client.get("/api/v1/users/")
        users_data_from_response = sorted(
            response.json(), key=itemgetter("phone_number")
        )

        assert response.status_code == 200
        for user_info, user_data_from_response in zip(
            self.users_info, users_data_from_response
        ):
            assert user_info["phone_number"] == user_data_from_response["phone_number"]
            assert user_info["email"] == user_data_from_response["email"]
            assert user_info["first_name"] == user_data_from_response["first_name"]
            assert user_info["last_name"] == user_data_from_response["last_name"]

    def test_get_user_success(self):
        response = self.client.get("/api/v1/users/")
        users_data_from_response = sorted(
            response.json(), key=itemgetter("phone_number")
        )

        for user_data_from_response in users_data_from_response:
            response = self.client.get(
                f'/api/v1/users/{user_data_from_response["user_id"]}'
            )
            user_data = response.json()

            assert response.status_code == 200
            assert user_data["phone_number"] == user_data_from_response["phone_number"]
            assert user_data["email"] == user_data_from_response["email"]
            assert user_data["first_name"] == user_data_from_response["first_name"]
            assert user_data["last_name"] == user_data_from_response["last_name"]
