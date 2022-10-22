import React from "react"
import { View, StyleSheet, Text } from "react-native"
import Body from "./Body"
import Header from "./Header"

export default function Layout({ children }: any) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "red",
  },
})
