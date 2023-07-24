import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FrameComponent7 = ({ style }) => {
  return (
    <View style={[styles.homeParent, style]}>
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/home1.png")}
      />
      <Text style={styles.acceuil}>Acceuil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 20,
    height: 20,
  },
  acceuil: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  homeParent: {
    backgroundColor: Color.gainsboro_200,
    width: 51,
    height: 35,
    paddingLeft: Padding.p_6xs,
    paddingRight: Padding.p_7xs,
    alignItems: "center",
  },
});

export default FrameComponent7;
