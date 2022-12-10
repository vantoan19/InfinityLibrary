import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native"

export default function TextField(props: any) {
  return (
    <TextInput
      {...props}
      style={[styles.textField, { width: props.width || "100%" }]}
    />
  )
}

const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: "#CBCACA",
    borderRadius: 10,
    padding: 10,
  },
})
