import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Layout/Header"
import Body from "../../components/Layout/Body"
import { MotiView, AnimatePresence } from "moti"
import Card from "../../components/Card/Card"
import { Books as Mock_BooksData } from "../../mocks/Books/Books"

const gap = 20

export default function HomeScreen(props: any) {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <Layout>
      <Header />
      <Body navigation={props.navigation}>
        <View style={[styles.cardsCont, { paddingVertical: -1 * (gap / 2) }]}>
          {Mock_BooksData.map((e, ind) => (
            <Card key={ind} bookData={e} gap={gap}></Card>
          ))}
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
