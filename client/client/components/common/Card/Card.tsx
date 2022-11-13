import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import placeholder from "../../../assets/placeholder.png"
import temp from "../../../assets/icon.png"
import { useNavigation } from "@react-navigation/native"
import { Book } from "../../../types/Book"

export default function Card({ gap }: any) {
  const navigation = useNavigation()

  const navigatingToDetailsPage = () => {
    const payloadObj: Book = {
      title: "Book1",
      image_covers: [placeholder as string],
      price: 20,
      price_currency: "$",
    }
    navigation.navigate("Details" as never, payloadObj as never)
  }

  return (
    <Pressable
      onPress={navigatingToDetailsPage}
      style={[styles.container, { marginVertical: gap / 2 }]}
    >
      <Image style={styles.imgCont} source={placeholder}></Image>

      <View style={styles.contentCont}>
        <Text style={styles.contentTitle}>Milk and Honey</Text>
        <View style={styles.innerContentCont}>
          <View style={styles.userCont}>
            <Image style={styles.avatar} source={temp}></Image>
            <View style={styles.userInfoCont}>
              <Text style={styles.usernameText}>username</Text>
              <Text style={styles.postedText}>Posted 1h ago</Text>
            </View>
          </View>
          <View style={styles.priceCont}>
            <Text style={styles.priceText}>32</Text>
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
    resizeMode: "contain",
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
