import { useNavigation } from "@react-navigation/native"
import React, { useLayoutEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import Layout from "../components/common/Layout/Layout"

export default function HomeScreen() {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  useLayoutEffect(() => {})
  return (
    <SafeAreaView>
      <Layout>
        <Text style={styles.text}>HomeScreen</Text>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
})
