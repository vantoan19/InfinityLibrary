import { View, Text, StyleSheet } from "react-native"
import Logo from "../../../assets/logo.svg"

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>asda</Text>
      <Logo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    borderWidth: 5,
    borderColor: "green",
  },
})
