import SendSVG from "../../assets/svg/send.svg"

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native"

type Props = {
  price: number
  priceCurrency: string
}
export default function FixedContact({ price, priceCurrency }: Props) {
  return (
    <View style={styles.fixedCont}>
      <View style={{ marginLeft: 5 }}>
        <Text style={{ color: "#BAB9B9", fontSize: 8, fontWeight: "500" }}>
          Price
        </Text>
        <View style={styles.priceCont}>
          <Text style={styles.priceNum}>{price}</Text>
          <Text style={styles.priceCur}>{priceCurrency}</Text>
        </View>
      </View>
      <Pressable style={styles.contactBtn}>
        <Text style={styles.contactTxt}>Contact the seller</Text>
        <SendSVG />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 413,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  fixedCont: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    bottom: 20,
    alignSelf: "center",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#F87C43",
    borderRadius: 12,
    shadowColor: "black",
  },
  priceCont: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  priceNum: {
    flexDirection: "row",
    fontSize: 26,
    fontWeight: "600",
    color: "#F87C43",
  },
  priceCur: {
    flexDirection: "row",
    color: "#AAA8A8",
    fontSize: 12,
    top: -5,
    left: 2,
  },
  contactBtn: {
    flexDirection: "row",
    backgroundColor: "#F87C43",
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: "center",
  },
  contactTxt: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginRight: 8,
  },
})
