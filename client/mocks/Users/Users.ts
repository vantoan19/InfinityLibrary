import { User } from "../../types/User"
import tempAva1 from "../../assets/ava1.png"
import tempAva2 from "../../assets/ava2.png"

export const MockUsers: User[] = [
  {
    id: 1,
    username: "nhtoby",
    avatar: tempAva1,
    location: "Budapest, Hungary",
    rated: 4,
    address: [
      {
        city: "Budapest",
        country: "Hungary",
      },
    ],
  },
  {
    id: 2,
    username: "amanda.jsz",
    avatar: tempAva2,
    location: "Budapest, Hungary",
    rated: 3,
    address: [
      {
        city: "Pecs",
        country: "Hungary",
      },
    ],
  },
]

export const MockUser: (id: number) => User | undefined = (id: number) =>
  MockUsers.find((e) => e.id === id)
