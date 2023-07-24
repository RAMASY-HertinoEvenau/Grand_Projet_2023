import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const VideoLive = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.videoLive}>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <Pressable
          style={[styles.homeParent, styles.parentLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Accueil" })
          }
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Text style={[styles.acceuil, styles.acceuilFlexBox]}>Acceuil</Text>
        </Pressable>
        <Pressable
          style={[styles.onlineCourseParent, styles.parentLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Cours" })
          }
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/online-course.png")}
          />
          <Text style={[styles.acceuil, styles.acceuilFlexBox]}>Cours</Text>
        </Pressable>
        <Pressable
          style={[styles.notificationParent, styles.parentLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Notification" })
          }
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
          <Text style={[styles.acceuil, styles.acceuilFlexBox]}>
            Notification
          </Text>
        </Pressable>
        <Pressable
          style={styles.settingParent}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Parametre" })
          }
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/setting.png")}
          />
          <Text style={[styles.acceuil, styles.acceuilFlexBox]}>Paramètre</Text>
        </Pressable>
      </View>
      <View style={[styles.vidoEnDirectParent, styles.parentPosition]}>
        <Text style={[styles.vidoEnDirect, styles.acceuilFlexBox]}>
          Vidéo en direct
        </Text>
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
  parentPosition: {
    height: 60,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parentLayout: {
    height: 35,
    alignItems: "center",
  },
  acceuilFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  leftLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  homeIcon: {
    width: 20,
    height: 20,
  },
  acceuil: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interRegular,
  },
  homeParent: {
    paddingLeft: Padding.p_6xs,
    paddingRight: Padding.p_7xs,
    alignItems: "center",
    width: 51,
    backgroundColor: Color.gainsboro_200,
    height: 35,
  },
  onlineCourseParent: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "center",
    width: 51,
    backgroundColor: Color.gainsboro_200,
    height: 35,
  },
  notificationParent: {
    width: 60,
    alignItems: "center",
  },
  settingParent: {
    width: 54,
    height: 37,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
  },
  frameParent: {
    bottom: 0,
    backgroundColor: Color.mintcream,
    flexDirection: "row",
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_9xs,
    justifyContent: "space-between",
  },
  vidoEnDirect: {
    top: 25,
    left: "19.44%",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    position: "absolute",
    textAlign: "left",
    color: Color.black,
  },
  leftArrowIcon: {
    left: 0,
    top: 0,
  },
  leftArrowWrapper: {
    top: 22,
    left: 20,
  },
  vidoEnDirectParent: {
    backgroundColor: Color.skyblue,
    top: 0,
  },
  videoLive: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default VideoLive;
