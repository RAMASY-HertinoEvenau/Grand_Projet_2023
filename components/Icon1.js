import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Icon1 = () => {
  return <View style={styles.icon} />;
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 51,
    backgroundColor: Color.gainsboro_200,
    top: 8,
    height: 35,
    alignItems: "center",
    position: "absolute",
  },
  acceuilTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  icon: {
    backgroundColor: Color.white,
    width: 226,
    height: 48,
    overflow: "hidden",
  },
});

export default Icon1;
