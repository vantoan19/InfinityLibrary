import { useState } from "react"
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native"
import { MagnifyingGlassIcon } from "react-native-heroicons/solid"
import TextField from "../../components/TextField/TextField"

export default function SearchBox() {
  const [query, setQuery] = useState()

  return (
    <View style={styles.container}>
      <MagnifyingGlassIcon color={"#1D1D1D"} size="16" />
      <TextField
        borderColor="transparent"
        onChangeText={setQuery}
        value={query}
        placeholder="Search for book..."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F2F2",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },

  cardsCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },
})
