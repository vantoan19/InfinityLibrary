import React from "react"
import { View, StyleSheet } from "react-native"
import Body from "./Body"
import Header from "./Header"

export default function Layout({ children }: any) {
  return (
    <View style={styles.container}>
      <Header />
      <Body>{children}</Body>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    borderWidth: 5,
    borderColor: "red",
  },
})
