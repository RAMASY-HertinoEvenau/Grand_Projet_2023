import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Padding } from "../GlobalStyles";

const FrameComponent1 = ({ style }) => {
  return (
    <View style={[styles.settingsParent, style]}>
      <Image
        style={styles.settingsIcon}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Text style={styles.paramtre}>Paramètre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsIcon: {
    width: 20,
    height: 20,
  },
  paramtre: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  settingsParent: {
    width: 54,
    height: 37,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
  },
});

export default FrameComponent1;
