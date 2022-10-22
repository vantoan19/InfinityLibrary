import { View, Text, StyleSheet, Image } from "react-native"
import Logo from "../../../assets/logo.svg"
import test from "../../../assets/icon.png"
import ChatBubbleSVG from "../../../assets/svg/chat-bubble.svg"

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.innerCont}>
        <View style={styles.avatar}>
          <ChatBubbleSVG />
        </View>
        <Image style={styles.avatar} source={test} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    borderWidth: 5,
    borderColor: "green",
  },
  innerCont: {
    display: "flex",
    flexDirection: "row",
  },

  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECEAEA",
    width: 37,
    height: 37,
    borderRadius: 50,
    marginLeft: 10,
  },
})
