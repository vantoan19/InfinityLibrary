import { User } from "../../types/User"
import tempAva1 from "../../assets/icon.png"
import tempAva2 from "../../assets/placeholder.png"

export const MockUsers: User[] = [
  {
    user_id: 1,
    username: "nhtoby",
    avatar: tempAva1,
    location: "Budapest,Hungary",
    rated: 4,
  },
  {
    user_id: 2,
    username: "nhtoby",
    avatar: tempAva2,
    location: "Budapest,Hungary",
    rated: 3,
  },
]

export const MockUser: (id: number) => User | undefined = (id: number) =>
  MockUsers.find((e) => e.user_id === id)
