import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FrameComponent5 = ({ style }) => {
  return (
    <View style={[styles.elearningParent, style]}>
      <Image
        style={styles.elearningIcon}
        contentFit="cover"
        source={require("../assets/elearning.png")}
      />
      <Text style={styles.cours}>Cours</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  elearningIcon: {
    width: 20,
    height: 20,
  },
  cours: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  elearningParent: {
    backgroundColor: Color.gainsboro_200,
    width: 51,
    height: 35,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default FrameComponent5;
