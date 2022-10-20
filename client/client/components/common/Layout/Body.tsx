import React from "react"
import { View, StyleSheet } from "react-native"

export default function Body({ children }: any) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    borderWidth: 5,
    borderColor: "blue",
  },
})
