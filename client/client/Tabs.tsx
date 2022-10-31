import * as React from "react"
import { Button, Text, View } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/HomeScreen"
import { useLayoutEffect } from "react"

function SettingsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function Tabs() {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: "30%",
          borderRadius: 50,
          display: "flex",
          width: "40%",
        },
        tabBarLabel: () => {
          return null
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
