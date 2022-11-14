import React, { useState } from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { useScrollBottomNavContext } from "../../context/ScrollBottomNavContext"

export default function Body({ children, navigation }: any) {
  const [offset, setOffset] = useState(0)
  const { scrollHide, setScrollHide } = useScrollBottomNavContext()
  const onScroll = (event: any) => {
    const currentOffset = event.nativeEvent.contentOffset.y
    const dif = currentOffset - (offset || 0)

    if (dif < 0) {
      setScrollHide(false)
    } else {
      setScrollHide(true)
    }

    setOffset(currentOffset)
  }

  return (
    <ScrollView style={styles.container} onScroll={onScroll}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    // borderWidth: 5,
    // borderColor: "blue",
  },
})
