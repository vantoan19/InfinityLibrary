import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native"

import temp from "../../assets/icon.png"

import { InformationCircleIcon } from "react-native-heroicons/outline"
import LocationSVG from "../../assets/svg/location.svg"
import MockVoteSVG from "../../assets/votes.svg"
import { User } from "../../types/User"

type Props = { user: User }

export default function SellerInformation({ user }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.titleTxt}>Seller infomation</Text>
        <InformationCircleIcon color={"#1D1D1D"} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.avatar} source={user?.avatar} />
          <View style={styles.contentCont}>
            <Text style={styles.username}>{user?.username}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LocationSVG color={"#1D1D1D"} width={12} height={12} />
              <Text style={styles.location}>{user?.location}</Text>
            </View>
          </View>
        </View>
        {/* REMOVE LATER */}
        <MockVoteSVG />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",

    paddingVertical: 18,
    paddingHorizontal: 16,

    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: "white",

    shadowColor: "#000000ba",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  titleCont: {
    flexDirection: "row",
    marginBottom: 15,
  },
  titleTxt: {
    color: "#1D1D1D",
    marginRight: 5,
    fontSize: 16,
    fontWeight: "600",
  },
  contentCont: {
    marginLeft: 10,
  },
  avatar: {
    borderRadius: 50,
    width: 41,
    height: 41,
  },
  username: {
    color: "#1D1D1D",
    fontWeight: "500",
    fontSize: 14,
    marginBottom: 2,
  },
  location: {
    color: "#AAA8A8",
    fontWeight: "400",
    fontSize: 9,
  },
})
