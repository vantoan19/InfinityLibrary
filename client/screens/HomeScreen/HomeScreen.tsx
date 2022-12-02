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
import { LOCALHOST } from "../../env"

const gap = 20

/**
 * Make sure to have env.ts at client/client (root frontend dir), with export const LOCALHOST = "ur ip4 address"
 */

export default function HomeScreen(props: any) {
  const navigation = useNavigation()
  const [bookData, setBookData] = useState<typeof Mock_BooksData>([])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  /*
  //API FETCHING
  useEffect(() => {
    const fetching = async () => {
      const req = await fetch(`${LOCALHOST}/api/v1/books/all?sort=default`)
      const res = await req.json()
      console.log("res", res)
      setBookData(res)
    }
    fetching()
  }, [])
  */

  //MOCK FETCHING
  useEffect(() => {
    const fetching = async () => {
      setBookData(Mock_BooksData)
    }
    fetching()
  }, [])

  return (
    <Layout>
      <Header />
      <Body navigation={props.navigation}>
        <View style={[styles.cardsCont, { paddingVertical: -1 * (gap / 2) }]}>
          {bookData.map((e, ind) => (
            <Card key={ind} bookData={e} gap={gap} />
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
