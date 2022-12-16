import { useLayoutEffect } from "react"
import { Text } from "react-native"
import Body from "../../components/Layout/Body"
import Layout from "../../components/Layout/Layout"

export default function LoginScreen({ navigation }: any) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <Layout>
      <Body>
        <Text>This is Login</Text>
      </Body>
    </Layout>
  )
}
