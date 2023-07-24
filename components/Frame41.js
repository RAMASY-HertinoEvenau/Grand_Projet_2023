import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent3 = ({ style }) => {
  return (
    <View style={[styles.notificationParent, style]}>
      <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification1.png")}
      />
      <Text style={styles.notification}>Notification</Text>
    </View>
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
    textAlign: "left",
  },
  notificationParent: {
    width: 60,
    height: 35,
    alignItems: "center",
  },
});

export default FrameComponent3;
