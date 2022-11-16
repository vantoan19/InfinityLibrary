import { ImageSourcePropType } from "react-native"
import { User } from "./User"

export type Book = {
  id: number
  title: string
  image_covers: ImageSourcePropType[]
  price: number

  posted?: string
  user_id: number
  user?: User
}

export type BookDetails = Book & {
  description?: string
  bookCondition: string
  location: string
  views: number
}
