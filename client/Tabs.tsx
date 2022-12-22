import React, { useEffect } from "react"
import { Button, Text, View } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import { useLayoutEffect } from "react"
import { MotiView, AnimatePresence } from "moti"

import ChatBubbleSVG from "./assets/svg/chat-bubble.svg"

import {
  HomeIcon,
  PlusCircleIcon,
  UserIcon,
} from "react-native-heroicons/solid"
import { useScrollBottomNavContext } from "./context/ScrollBottomNavContext"
import CreateScreen from "./screens/CreateScreen/CreateScreen"
import { useAuthenticateContext } from "./context/AuthenticateContext"

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
  const { isAuthenticate } = useAuthenticateContext()
  const navigation = useNavigation()

  useEffect(() => {
    if (isAuthenticate === false) navigation.navigate("Login" as never)
  }, [isAuthenticate])

  const { scrollHide } = useScrollBottomNavContext()
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon size={20} color={color} />
          ),
          tabBarActiveTintColor: "#F87C43",
          tabBarInactiveTintColor: "#ACA9A9",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <PlusCircleIcon size={20} color={color} />
          ),
          tabBarActiveTintColor: "#F87C43",
          tabBarInactiveTintColor: "#ACA9A9",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <UserIcon size={20} color={color} />
          ),
          tabBarActiveTintColor: "#F87C43",
          tabBarInactiveTintColor: "#ACA9A9",
        }}
      />
    </Tab.Navigator>
  )
}
