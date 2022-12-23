import { useState } from "react"
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native"
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/solid"

export default function FilterSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable
          onPress={() => {
            setActiveIndex(1)
          }}
        >
          <Text
            style={[
              styles.option,
              { color: activeIndex === 1 ? "#1D1D1D" : "#BEBEBE" },
            ]}
          >
            Recommend
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setActiveIndex(2)
          }}
        >
          <Text
            style={[
              styles.option,
              { color: activeIndex === 2 ? "#1D1D1D" : "#BEBEBE" },
            ]}
          >
            Newest
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setActiveIndex(3)
          }}
        >
          <Text
            style={[
              styles.option,
              { color: activeIndex === 3 ? "#1D1D1D" : "#BEBEBE" },
            ]}
          >
            Popular
          </Text>
        </Pressable>
      </View>
      <View style={styles.filterBtn}>
        <AdjustmentsHorizontalIcon color={"white"} size="20" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  option: {
    marginRight: 20,
    fontWeight: "500",
    fontSize: 14,
    // color: "#BEBEBE",
  },
  filterBtn: {
    borderRadius: 5,
    backgroundColor: "#1D1D1D",
    padding: 4,
  },
})
