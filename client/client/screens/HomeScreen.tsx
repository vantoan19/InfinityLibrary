import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View, StatusBar } from "react-native"

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
      <Text style={styles.text}>HomeScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
})
