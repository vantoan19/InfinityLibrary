import { ImageSourcePropType } from "react-native"

export type User = {
  id: number
  username: string
  avatar: ImageSourcePropType
  address: {
    city: string
    country: string
  }[]
  location: string
  rated: number
}
