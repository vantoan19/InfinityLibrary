import { StyleSheet, Text, View } from "react-native"
import { Book } from "../types/Book"
export default function DetailsScreen({ navigation, route }: any) {
  const bookDetails: Book = route.params
  return <Text>{JSON.stringify(bookDetails)}</Text>
}
