import { useEffect, useLayoutEffect, useState } from "react"
import { Pressable, View, Text, StyleSheet, Image } from "react-native"
import { PencilIcon } from "react-native-heroicons/outline"
import { ArrowLongLeftIcon } from "react-native-heroicons/solid"
import Body from "../../components/Layout/Body"
import Layout from "../../components/Layout/Layout"
import profileBG from "../../assets/profileBG.png"
import avatar from "../../assets/placeholder.png"
import MockVoteSVG from "../../assets/votes.svg"
import Card from "../../components/Card/Card"

import { Books as Mock_BooksData } from "../../mocks/Books/Books"

const gap = 20

export default function ProfileScreen({ navigation }: any) {
  const [bookData, setBookData] = useState<typeof Mock_BooksData>([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  const navigatingToHomePage = () => {
    //Navigating to home screen
    navigation.navigate("Home")
  }

  //MOCK FETCHING

  useEffect(() => {
    const fetching = async () => {
      setBookData(Mock_BooksData)
    }
    fetching()
  }, [])

  return (
    <Layout>
      <Body>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={navigatingToHomePage}>
            <ArrowLongLeftIcon color="#1D1D1D" size={33} />
          </Pressable>
          <View style={styles.editBtn}>
            <PencilIcon color="white" size={15} />
          </View>
        </View>
        {/* CARD */}
        <View style={styles.cardProfileCont}>
          <Image style={styles.profileBG} source={profileBG} />

          <Image style={styles.avatar} source={avatar} />
          <Text style={styles.mainName}>Nguyen Hieu</Text>
          <Text style={styles.username}>@nhtoby</Text>
          <MockVoteSVG />
        </View>
        {/* INFO CONT */}
        <View style={styles.infoCont}>
          <View style={styles.infoInnerCont}>
            <Text style={styles.infoTitle}>Listed</Text>
            <Text style={styles.infoDescrip}>12 Books</Text>
          </View>

          <View style={styles.infoInnerCont}>
            <Text style={styles.infoTitle}>Location</Text>
            <Text style={styles.infoDescrip}>Budapest</Text>
          </View>

          <View style={styles.infoInnerCont}>
            <Text style={styles.infoTitle}>Reviews</Text>
            <Text style={styles.infoDescrip}>120 votes</Text>
          </View>
        </View>

        {/* SECTION */}
        <Text style={styles.sectionTitle}>Your List</Text>

        <View style={[styles.cardsCont, { paddingVertical: -1 * (gap / 2) }]}>
          {bookData.map((e, ind) => (
            <Card key={ind} bookData={e} gap={gap} />
          ))}
        </View>

        <View style={styles.spacer} />
      </Body>
    </Layout>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },

  editBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "#1D1D1D",

    borderRadius: 7,
  },

  cardProfileCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    width: "100%",
    borderRadius: 14,
  },

  profileBG: {
    width: "100%",
    position: "absolute",
    borderRadius: 14,
  },

  avatar: {
    width: 78,
    height: 78,
    borderRadius: 100,
    marginBottom: 10,
  },

  mainName: {
    fontWeight: "500",
    fontSize: 15,
    color: "#1D1D1D",
    marginBottom: 2,
  },

  username: {
    fontWeight: "500",
    fontSize: 9,
    color: "#8D8787",
    marginBottom: 10,
  },

  infoCont: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  infoInnerCont: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 35,
  },

  infoTitle: {
    fontWeight: "500",
    fontSize: 10,
    color: "#B8B8B8",
    marginBottom: 5,
  },

  infoDescrip: {
    fontWeight: "500",
    fontSize: 16,
    color: "#1D1D1D",
  },

  sectionTitle: {
    fontWeight: "600",
    fontSize: 21,
    color: "#1D1D1D",
    marginBottom: 18,
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
