import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FrameComponent6 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.homeParent, style]}
      onPress={() => navigation.navigate("Accueil")}
    >
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Text style={styles.acceuil}>Acceuil</Text>
    </Pressable>
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
    color: Color.black,
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

export default FrameComponent6;
