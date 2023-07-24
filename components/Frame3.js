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

const FrameComponent4 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.onlineCourseParent, style]}
      onPress={() => navigation.navigate("Cours")}
    >
      <Image
        style={styles.onlineCourseIcon}
        contentFit="cover"
        source={require("../assets/online-course.png")}
      />
      <Text style={styles.cours}>Cours</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  onlineCourseIcon: {
    width: 20,
    height: 20,
  },
  cours: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
  },
  onlineCourseParent: {
    backgroundColor: Color.gainsboro_200,
    width: 51,
    height: 35,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default FrameComponent4;
