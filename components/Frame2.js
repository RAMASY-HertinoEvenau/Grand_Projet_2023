import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.settingParent, style]}
      onPress={() => navigation.navigate("Parametre")}
    >
      <Image
        style={styles.settingIcon}
        contentFit="cover"
        source={require("../assets/setting.png")}
      />
      <Text style={styles.paramtre}>Paramètre</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  settingIcon: {
    width: 20,
    height: 20,
  },
  paramtre: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
  },
  settingParent: {
    width: 54,
    height: 37,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
  },
});

export default FrameComponent;
