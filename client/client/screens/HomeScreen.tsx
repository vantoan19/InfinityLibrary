import { useNavigation } from "@react-navigation/native"
import React, { useLayoutEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import Layout from "../components/common/Layout/Layout"
import Header from "../components/common/Layout/Header"
import Body from "../components/common/Layout/Body"
import { MotiView, AnimatePresence } from "moti"
import Card from "../components/common/Card/Card"

const gap = 20

export default function HomeScreen(props: any) {
  console.log("Home props", props)
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  useLayoutEffect(() => {})
  return (
    <Layout>
      <Header />
      <Body navigation={props.navigation}>
        <View style={[styles.cardsCont, { paddingVertical: -1 * (gap / 2) }]}>
          <Card gap={gap}></Card>
          <Card gap={gap}></Card>
          <Card gap={gap}></Card>
          <Card gap={gap}></Card>
          <Card gap={gap}></Card>
          <Card gap={gap}></Card>
          <Card gap={gap}></Card>
          <Card gap={gap}></Card>
        </View>
        <Text style={styles.text}>HomeScreen</Text>
      </Body>
    </Layout>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },

  cardsCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },
})
