import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native"
import BookSVG from "../../assets/svg/book.svg"
import LocationSVG from "../../assets/svg/location.svg"
import ViewSVG from "../../assets/svg/view.svg"

export default function GeneralInfos() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { flex: 1, marginHorizontal: 24 }]}>
        <BookSVG></BookSVG>
        <Text style={styles.text}>Newly open</Text>
      </View>
      <View
        style={[
          styles.box,
          {
            flex: 2,
            borderColor: "#EBE9E9",
            borderLeftWidth: 1,
            borderRightWidth: 1,
          },
        ]}
      >
        <LocationSVG></LocationSVG>
        <Text style={styles.text}>Budapest, Hungary</Text>
      </View>
      <View style={[styles.box, { flex: 1, marginHorizontal: 24 }]}>
        <ViewSVG></ViewSVG>
        <Text style={styles.text}>192 views</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    width: "100%",

    paddingVertical: 18,

    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: "white",

    shadowColor: "#000000ba",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 9,
    color: "#BAB9B9",
    textAlign: "center",
    marginTop: 5,
  },
})
