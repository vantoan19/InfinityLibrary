import { ImageSourcePropType } from "react-native"

export type User = {
  id: number
  username: string
  avatar: ImageSourcePropType
  location: string
  rated: number
}
