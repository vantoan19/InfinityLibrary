import { useLayoutEffect, useState } from "react"
import { StyleSheet, Text, Image, View, Button, Pressable } from "react-native"
import Body from "../../components/Layout/Body"
import Layout from "../../components/Layout/Layout"
import art from "../../assets/login-art.png"
import TextField from "../../components/TextField/TextField"
import Divider from "./Divider"

import GoogleIcon from "../../assets/svg/googleicon.svg"
import FacebookIcon from "../../assets/svg/facebookicon.svg"

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <Layout>
      <Image source={art} style={styles.art} />
      <Body>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputWrapper}>
          <TextField
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextField
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        <Pressable style={styles.btnLogin}>
          <Text style={{ color: "white", fontWeight: "700" }}>Login</Text>
        </Pressable>
        <Divider />
        <Pressable style={styles.btnGoogle}>
          <View style={styles.googleIconWrapper}>
            <GoogleIcon />
          </View>
          <Text style={{ color: "#AFA6A6", fontWeight: "700" }}>
            Login with Google
          </Text>
        </Pressable>

        <Pressable style={styles.btnGoogle}>
          <View style={styles.googleIconWrapper}>
            <FacebookIcon />
          </View>
          <Text style={{ color: "#AFA6A6", fontWeight: "700" }}>
            Login with Facebook
          </Text>
        </Pressable>
      </Body>
    </Layout>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },

  art: {
    width: "100%",
    minHeight: 250,
    resizeMode: "cover",
    flex: 1,
    marginBottom: 20,
  },

  title: {
    fontWeight: "700",
    fontSize: 32,
    color: "#525050",
    marginBottom: 20,
  },

  inputWrapper: {
    marginBottom: 24,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  forgotPassword: {
    fontWeight: "500",
    fontSize: 12,
    color: "#F87C43",
    marginBottom: 20,
  },

  btnLogin: {
    width: "100%",
    padding: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9F5A",
    borderRadius: 8,
  },

  btnGoogle: {
    position: "relative",
    width: "100%",
    padding: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2EFEF",
    borderRadius: 8,
    marginBottom: 15,
  },

  googleIconWrapper: {
    position: "absolute",
    left: 50,
  },
})
