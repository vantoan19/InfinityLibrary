import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import Logo from "../../assets/logo.svg"
import test from "../../assets/icon.png"
import ChatBubbleSVG from "../../assets/svg/chat-bubble.svg"
import { useNavigation } from "@react-navigation/native"

export default function Header() {
  const navigate = useNavigation()
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.innerCont}>
        <View style={styles.avatar}>
          <ChatBubbleSVG />
        </View>
        <Pressable
          onPress={() => {
            navigate.navigate("Profile" as never, {} as never)
          }}
        >
          <Image style={styles.avatar} source={test} />
        </Pressable>
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
    paddingVertical: 12,
    // borderWidth: 5,
    // borderColor: "green",
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
