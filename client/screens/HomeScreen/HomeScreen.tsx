import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native"
import Layout from "../../components/Layout/Layout"
import Header from "../../components/Layout/Header"
import Body from "../../components/Layout/Body"
import { MotiView, AnimatePresence } from "moti"
import Card from "../../components/Card/Card"
import {
  Books as Mock_BooksData,
  MockSortedBooks,
} from "../../mocks/Books/Books"
import { LOCALHOST } from "../../env"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useAuthenticateContext } from "../../context/AuthenticateContext"
import SearchBox from "./SearchBox"
import FilterSection from "./FilterSection"

const gap = 20

/**
 * Make sure to have env.ts at client/client (root frontend dir), with export const LOCALHOST = "ur ip4 address"
 */

export default function HomeScreen(props: any) {
  const navigation = useNavigation()
  const [bookData, setBookData] = useState<typeof Mock_BooksData>([])
  const [activeFilter, setActiveFilter] = useState(1)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  //API FETCHING
  useEffect(() => {
    const convertFilter = () => {
      switch (activeFilter) {
        case 1:
          return "default"
        case 2:
          return "time-desc"
        case 3:
          return "votes"
        default:
          return "default"
      }
    }

    setBookData(MockSortedBooks(convertFilter()) || [])
  }, [activeFilter])

  //MOCK FETCHING
  /*
  useEffect(() => {
    const fetching = async () => {
      
    }
    fetching()
  }, [])
  */

  return (
    <Layout>
      <Header />
      <Body navigation={props.navigation}>
        <SearchBox />
        <FilterSection
          activeFilter={activeFilter}
          setActiveFilterCB={setActiveFilter}
        />
        <View style={[styles.cardsCont, { paddingVertical: -1 * (gap / 2) }]}>
          {bookData.map((e, ind) => (
            <Card key={e.id} bookData={e} gap={gap} />
          ))}
        </View>
        <View style={styles.spacer} />
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
  spacer: {
    height: 120,
  },
})
