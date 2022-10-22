import React from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"

export default function Body({ children }: any) {
  return <ScrollView style={styles.container}>{children}</ScrollView>
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    borderWidth: 5,
    borderColor: "blue",
  },
})
