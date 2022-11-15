import { ImageSourcePropType } from "react-native"

export type User = {
  user_id: number
  username: string
  avatar: ImageSourcePropType
  location: string
  rated: number
}
