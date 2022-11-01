import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import Tabs from "./Tabs"
import { ScrollBottomNavProvider } from "./context/ScrollBottomNavContext"

function Details() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>yoo!</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <ScrollBottomNavProvider>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </ScrollBottomNavProvider>
    </NavigationContainer>
  )
}
