import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native"
import { Book } from "../../types/Book"
import SendSVG from "../assets/svg/send.svg"
import FixedContact from "./FixedContact"
export default function DetailsScreen({ navigation, route }: any) {
  const bookDetails: Book = route.params

  const nav = useNavigation()
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    })
  })
  return (
    <>
      <ScrollView>
        <Image
          style={styles.image}
          source={bookDetails.image_covers[0]}
        ></Image>
        <Text>{JSON.stringify(bookDetails)}</Text>
      </ScrollView>
      <FixedContact
        price={bookDetails.price}
        priceCurrency={bookDetails.price_currency}
      />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 413,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
})
