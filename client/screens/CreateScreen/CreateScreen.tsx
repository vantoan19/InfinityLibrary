import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import Body from "../../components/Layout/Body"
import TextField from "../../components/TextField/TextField"
import { ArrowLongLeftIcon } from "react-native-heroicons/solid"
import { PhotoIcon } from "react-native-heroicons/outline"

export default function CreateScreen({ navigation }: any) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(null)
  const [currency, setCurrency] = useState("")
  const [description, setDescription] = useState("")

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  const navigatingToHomePage = () => {
    navigation.navigate("Home")
  }

  return (
    <Layout>
      <Body>
        {/* Header */}
        <Pressable style={styles.header} onPress={navigatingToHomePage}>
          <ArrowLongLeftIcon color="#1D1D1D" size={33} />
          <View style={styles.postBtn}>
            <Text style={styles.txtPostBtn}>Post</Text>
          </View>
        </Pressable>
        <Text style={styles.title}>List a new Book</Text>
        <View style={styles.addImage}>
          <Pressable
            style={styles.iconImageCont}
            onPress={navigatingToHomePage}
          >
            <PhotoIcon color="#CBCACA" size={28} />
            <Text style={{ color: "#CBCACA" }}>Add images</Text>
          </Pressable>
        </View>
        <View style={styles.inputWrapper}>
          <TextField
            onChangeText={setTitle}
            value={title}
            placeholder="Title"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextField
            width="60%"
            onChangeText={setPrice}
            value={price}
            placeholder="Price"
          />
          <TextField
            width="35%"
            onChangeText={setCurrency}
            value={currency}
            placeholder="Currency"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextField
            onChangeText={setDescription}
            value={description}
            placeholder="Description"
          />
        </View>
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

  postBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#F87C43",

    borderRadius: 7,
  },

  iconImageCont: {
    alignItems: "center",
  },

  txtPostBtn: {
    color: "white",
    fontWeight: "500",
  },

  addImage: {
    width: "100%",
    height: 165,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    borderColor: "#CBCACA",
    borderWidth: 1,
    marginBottom: 24,
  },

  title: {
    fontWeight: "600",
    fontSize: 37,
    marginBottom: 24,
    color: "#1D1C1C",
  },

  inputWrapper: {
    marginBottom: 24,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
