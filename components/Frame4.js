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
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.notificationParent, style]}
      onPress={() => navigation.navigate("Notification")}
    >
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <Text style={styles.notification}>Notification</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  notificationIcon: {
    width: 20,
    height: 20,
  },
  notification: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
  },
  notificationParent: {
    width: 60,
    height: 35,
    alignItems: "center",
  },
});

export default FrameComponent2;
