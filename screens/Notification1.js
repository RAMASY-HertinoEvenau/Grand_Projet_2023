import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.notificationParent}>
        <Text style={styles.notification1}>Notification</Text>
        <Pressable
          style={[styles.leftArrowWrapper, styles.leftLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.leftArrowIcon, styles.leftLayout]}
            contentFit="cover"
            source={require("../assets/left-arrow.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  notification1: {
    top: 25,
    left: "19.44%",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  leftArrowIcon: {
    left: 0,
    top: 0,
  },
  leftArrowWrapper: {
    top: 22,
    left: 20,
  },
  notificationParent: {
    right: "0%",
    left: "0%",
    backgroundColor: Color.skyblue,
    height: 60,
    top: 0,
    position: "absolute",
    width: "100%",
  },
  notification: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Notification1;
