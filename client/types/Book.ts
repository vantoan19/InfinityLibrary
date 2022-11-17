import { ImageSourcePropType } from "react-native"

export type Book = {
  title: string
  image_covers: ImageSourcePropType[]
  price: number
  price_currency: string
  description?: string
}
