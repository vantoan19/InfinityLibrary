import { useNavigation } from "@react-navigation/native"
import { useEffect, useLayoutEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native"
import { Book, BookDetails } from "../../types/Book"
import FixedContact from "./FixedContact"
import GeneralInfos from "./GeneralInfos"
import SellerInformation from "./SellerInfomation"
import { MockDetailsBook } from "../../mocks/Books/Books"
import { MockUser } from "../../mocks/Users/Users"
import { User } from "../../types/User"
import { ArrowLongLeftIcon } from "react-native-heroicons/solid"
import { LOCALHOST } from "../../env"
export default function DetailsScreen({ navigation, route }: any) {
  const bookID: number = route.params

  const [bookDetails, setBookDetails] = useState<BookDetails>({} as BookDetails)

  const nav = useNavigation()
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    })
  })

  //   API FETCHING
  useEffect(() => {
    const fetchBook = async () => {
      const req = await fetch(
        `${LOCALHOST}/api/v1/books/by_id?book_id=${bookID}`
      )
      let res = await req.json()

      //Fetch MOCK instead
      console.log("resss", res)
      if (res.detail === "book not found") {
        res = MockDetailsBook(bookID)
        console.log("bookD", res)
      }

      //const res = MockDetailsBook(bookID) as BookDetails
      const userID = res.user_id
      //const user = MockUser(userID)
      const reqUser = await fetch(`${LOCALHOST}/api/v1/users/${userID}`)
      const resUser = await reqUser.json()
      const user = resUser

      const finalObj = { ...res, user }

      setBookDetails(finalObj)
    }
    fetchBook()
  }, [])

  /*
  //   MOCK FETCHING
  //TODO: For fetching data base on bookDetails.
  useEffect(() => {
    const fetchBook = async () => {
      // const req = await fetch('../')
      // const res = await req.json()

      const res = MockDetailsBook(bookID) as BookDetails
      const userID = res.user_id
      const user = MockUser(userID)

      const finalObj = { ...res, user }

      setBookDetails(finalObj)
    }
    fetchBook()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      // const req = await fetch('../')
      // const res = await req.json()
    }
    fetchUser()
  }, [bookDetails])
  */

  return (
    <>
      <ScrollView style={{ flexDirection: "column", backgroundColor: "white" }}>
        <Image style={styles.image} source={bookDetails?.image_covers?.[0]} />
        <ArrowLongLeftIcon
          color="white"
          size={40}
          style={{ position: "absolute", left: 20, top: 20 }}
          onPress={() => navigation.navigate("Home")}
        />
        <View style={styles.main}>
          <Text style={styles.titleTxt}>{bookDetails?.title}</Text>
          <Text style={styles.postedTxt}>Posted 3 hours ago</Text>
          <GeneralInfos />
          <Text style={styles.descriptionTxt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            rerum repudiandae veniam placeat perferendis facilis numquam
            laudantium cumque praesentium. Sunt aut deserunt soluta ipsam!
            Exercitationem eos quos quaerat qui deserunt?{"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            rerum repudiandae veniam placeat perferendis facilis numquam
            laudantium cumque praesentium. Sunt aut deserunt soluta ipsam!
            Exercitationem eos quos quaerat qui deserunt?
          </Text>
          <SellerInformation user={bookDetails.user as any} />
          <Text>{JSON.stringify(bookDetails.user)}</Text>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
      <FixedContact price={bookDetails?.price} priceCurrency="$" />
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
    marginTop: 10,
  },
  postedTxt: {
    color: "#BAB9B9",
    fontWeight: "600",
    fontSize: 9,
  },
  descriptionTxt: {
    fontSize: 15,
  },
  spacer: {
    height: 120,
  },
})
