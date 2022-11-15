import { ImageSourcePropType } from "react-native"
import { User } from "./User"

export type Book = {
  title: string
  image_covers: ImageSourcePropType[]
  price: number
  price_currency: string

  posted?: string
  user_id?: string
  user?: User
}

export type BookDetails = Book & {
  description?: string
  bookCondition: string
  location: string
  views: number
}
