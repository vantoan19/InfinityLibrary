import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import placeholder from "../../../assets/placeholder.png"
import temp from "../../assets/icon.png"
import { useNavigation } from "@react-navigation/native"
import { Book } from "../../types/Book"
import { MockUser } from "../../mocks/Users/Users"
import { useEffect, useState } from "react"

type Props = {
  gap: any
  bookData: Book
}

export default function Card({ gap, bookData }: Props) {
  const navigation = useNavigation()

  const [displayBookData, setDisplayBookData] = useState(bookData)

  const navigatingToDetailsPage = () => {
    const payloadObj: number = bookData.id
    navigation.navigate("Details" as never, payloadObj as never)
  }

  useEffect(() => {
    const detailedUser = MockUser(bookData.user_id)
    setDisplayBookData({ ...displayBookData, user: detailedUser })
  }, [])

  return (
    <Pressable
      onPress={navigatingToDetailsPage}
      style={[styles.container, { marginVertical: gap / 2 }]}
    >
      <Image
        style={styles.imgCont}
        source={displayBookData.image_covers[0]}
      ></Image>

      <View style={styles.contentCont}>
        <Text style={styles.contentTitle}>{displayBookData.title}</Text>
        <View style={styles.innerContentCont}>
          <View style={styles.userCont}>
            <Image
              style={styles.avatar}
              source={displayBookData.user?.avatar || temp}
            ></Image>
            <View style={styles.userInfoCont}>
              <Text style={styles.usernameText}>username</Text>
              <Text style={styles.postedText}>Posted 1h ago</Text>
            </View>
          </View>
          <View style={styles.priceCont}>
            <Text style={styles.priceText}>{displayBookData.price}</Text>
            <Text style={styles.priceCur}>$</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "47%",
  },
  imgCont: {
    display: "flex",
    width: "100%",
    height: 190,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 5,
    marginBottom: 10,
  },

  contentCont: {
    display: "flex",
  },

  contentTitle: {
    fontSize: 17,
    fontWeight: "600",
  },

  innerContentCont: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    // borderWidth: 2,
    // borderColor: "red",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    width: 22,
    height: 22,
    marginRight: 5,
  },

  userCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  userInfoCont: {
    display: "flex",
  },

  usernameText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#1D1D1D",
  },

  postedText: {
    fontWeight: "400",
    fontSize: 8,
    color: "#AAA8A8",
  },

  priceText: {
    fontWeight: "600",
    fontSize: 21,
    color: "#F87C43",
  },

  priceCur: {
    color: "#AAA8A8",
    fontSize: 10,
    fontWeight: "500",
  },

  priceCont: {
    flexDirection: "row",
  },
})
