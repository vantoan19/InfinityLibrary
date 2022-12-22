import { StyleSheet, Text, Image, View, Button, Pressable } from "react-native"

export default function Divider() {
  return (
    <View style={styles.cont}>
      <View style={styles.divider} />
      <Text style={styles.txt}>OR</Text>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9D6D6",
  },

  txt: {
    marginHorizontal: 10,
    color: "#D9D6D6",
    fontWeight: "700",
    fontSize: 12,
  },
})
