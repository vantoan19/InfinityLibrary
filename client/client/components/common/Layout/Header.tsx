import { View, Text, StyleSheet } from "react-native"

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>asda</Text>
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
