import { useNavigation } from "@react-navigation/native"
import React, { useLayoutEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import Layout from "../components/common/Layout/Layout"
import Header from "../components/common/Layout/Header"
import Body from "../components/common/Layout/Body"

export default function HomeScreen() {
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
      <Body>
        <Text style={styles.text}>HomeScreen</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
        <Text> Main Content Here</Text>
      </Body>
    </Layout>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
})
