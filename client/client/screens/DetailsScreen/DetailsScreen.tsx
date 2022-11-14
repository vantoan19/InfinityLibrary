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
import GeneralInfos from "./GeneralInfos"
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
      <ScrollView style={{ flexDirection: "column", backgroundColor: "white" }}>
        <Image
          style={styles.image}
          source={bookDetails.image_covers[0]}
        ></Image>
        <View style={styles.main}>
          <Text style={styles.titleTxt}>{bookDetails.title}</Text>
          <Text style={styles.postedTxt}>Posted 2 hours ago</Text>
          <GeneralInfos />
          <Text>{JSON.stringify(bookDetails)}</Text>
        </View>
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
  main: {
    alignSelf: "center",
    width: "90%",
  },
  titleTxt: {
    fontWeight: "600",
    fontSize: 38,
    color: "#1D1D1D",
  },
  postedTxt: {
    color: "#BAB9B9",
    fontWeight: "600",
    fontSize: 9,
  },
})
