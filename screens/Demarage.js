import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Demarage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.demarage}
      locations={[0, 0.46, 0.94]}
      colors={["#87ceeb", "#1e90ff", "#87ceeb"]}
    >
      <Pressable
        style={styles.commencerParent}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Accueil" })
        }
      >
        <Text style={[styles.commencer, styles.commencerFlexBox]}>
          Commencer
        </Text>
        <Image
          style={styles.doubleRightIcon}
          contentFit="cover"
          source={require("../assets/double-right.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.augmenteTesConnaissancesContainer,
          styles.commencerFlexBox,
        ]}
      >
        <Text
          style={styles.commencerTypo}
        >{`Augmente tes connaissances & ton niveau avec `}</Text>
        <Text style={styles.duxpert}>ÉduXpert</Text>
      </Text>
      <Image
        style={styles.studentsAtGraduationCeremon}
        contentFit="cover"
        source={require("../assets/students-at-graduation-ceremony.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  commencerFlexBox: {
    textAlign: "left",
    color: Color.mintcream,
  },
  commencer: {
    fontSize: FontSize.size_base,
    display: "flex",
    width: 95,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignItems: "center",
  },
  doubleRightIcon: {
    width: 20,
    height: 34,
  },
  commencerParent: {
    width: "37.5%",
    right: "6.39%",
    bottom: 40,
    left: "56.11%",
    borderRadius: Border.br_11xl,
    backgroundColor: "#ffe66d",
    height: 38,
    flexDirection: "row",
    paddingHorizontal: 9,
    paddingVertical: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  commencerTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  duxpert: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  augmenteTesConnaissancesContainer: {
    top: 420,
    left: 31,
    fontSize: 32,
    width: 300,
    height: 162,
    position: "absolute",
  },
  studentsAtGraduationCeremon: {
    width: "93.89%",
    top: 107,
    right: "2.78%",
    left: "3.33%",
    maxWidth: "100%",
    height: 263,
    position: "absolute",
    overflow: "hidden",
  },
  demarage: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Demarage;
