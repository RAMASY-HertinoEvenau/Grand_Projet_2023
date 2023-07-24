import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import Connexion from "../components/Connexion";
import Menu from "../components/Menu";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Cours = () => {
  const navigation = useNavigation();
  const [groupContainer6Visible, setGroupContainer6Visible] = useState(false);
  const [userIconVisible, setUserIconVisible] = useState(false);
  const [menuIconVisible, setMenuIconVisible] = useState(false);

  const openGroupContainer6 = useCallback(() => {
    setGroupContainer6Visible(true);
  }, []);

  const closeGroupContainer6 = useCallback(() => {
    setGroupContainer6Visible(false);
  }, []);

  const openUserIcon = useCallback(() => {
    setUserIconVisible(true);
  }, []);

  const closeUserIcon = useCallback(() => {
    setUserIconVisible(false);
  }, []);

  const openMenuIcon = useCallback(() => {
    setMenuIconVisible(true);
  }, []);

  const closeMenuIcon = useCallback(() => {
    setMenuIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.cours}>
        <View style={styles.frameParent}>
          <View style={[styles.javascriptLogo1Parent, styles.parentLayout]}>
            <Image
              style={[styles.javascriptLogo1Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/javascriptlogo-1.png")}
            />
            <Text style={[styles.coursDeJavascript, styles.coursTypo]}>
              Cours de JavaScript
            </Text>
          </View>
          <View style={[styles.cSharp800x8001Parent, styles.demaragePosition]}>
            <Image
              style={[styles.cSharp800x8001Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/csharp800x800-1.png")}
            />
            <Text style={[styles.coursDeC, styles.coursTypo]}>Cours de C#</Text>
          </View>
        </View>
        <Text style={[styles.lesCours, styles.lesCoursPosition]}>
          Les cours
        </Text>
        <View style={styles.groupParent}>
          <Pressable
            style={styles.pdfParent}
            onPress={() => navigation.navigate("FichierPDF")}
          >
            <Image
              style={[styles.pdfIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/pdf.png")}
            />
            <Text style={[styles.fichierPdf, styles.videoTypo]}>
              Fichier PDF
            </Text>
          </Pressable>
          <Pressable
            style={[styles.instagramLiveParent, styles.progresionPosition]}
            onPress={() => navigation.navigate("VideoLive")}
          >
            <Image
              style={[styles.instagramLiveIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/instagram-live.png")}
            />
            <Text style={[styles.enDirect, styles.videoTypo]}>En direct</Text>
          </Pressable>
          <Pressable
            style={[styles.playParent, styles.iconParentPosition]}
            onPress={() => navigation.navigate("Video")}
          >
            <Image
              style={[styles.instagramLiveIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/play.png")}
            />
            <Text style={[styles.video, styles.videoTypo]}>Video</Text>
          </Pressable>
        </View>
        <View style={[styles.groupContainer, styles.lesCoursPosition]}>
          <View style={styles.podiumParent}>
            <Image
              style={[styles.pdfIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/podium.png")}
            />
            <Text style={[styles.progresion, styles.progresionPosition]}>
              Progresion
            </Text>
          </View>
          <View style={[styles.onlineClassParent, styles.iconParentPosition]}>
            <Image
              style={[styles.instagramLiveIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/online-class.png")}
            />
            <Text style={[styles.classe, styles.videoTypo]}>Classe</Text>
          </View>
          <Pressable
            style={styles.categoriesParent}
            onPress={openGroupContainer6}
          >
            <Text style={[styles.categories, styles.videoTypo]}>
              Categories
            </Text>
            <Image
              style={[styles.instagramLiveIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/diagram.png")}
            />
          </Pressable>
        </View>
        <LinearGradient
          style={[styles.demarage, styles.demaragePosition]}
          locations={[0, 0.51, 0.94]}
          colors={["#87ceeb", "#deefff", "#87ceeb"]}
        >
          <TextInput
            style={styles.demarageChild}
            placeholder="Rechercher un cours "
            mode="outlined"
            right={
              <TextInput.Icon style={{ marginTop: "50%" }} name="magnify" />
            }
            theme={{ colors: { background: "#fff" } }}
          />
          <Image
            style={[
              styles.searchingTheWebOnTablet,
              styles.languageLearningAppLayout,
            ]}
            contentFit="cover"
            source={require("../assets/searching-the-web-on-tablet.png")}
          />
          <Image
            style={[
              styles.languageLearningApp,
              styles.languageLearningAppLayout,
            ]}
            contentFit="cover"
            source={require("../assets/language-learning-app.png")}
          />
          <View style={[styles.userParent, styles.iconLayout1]}>
            <Pressable
              style={[styles.user, styles.userPosition]}
              onPress={openUserIcon}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/user.png")}
              />
            </Pressable>
            <Text style={[styles.lesCoursDisponible, styles.userPosition]}>
              Les cours disponible
            </Text>
            <Pressable
              style={[styles.user, styles.userPosition]}
              onPress={openMenuIcon}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/menu.png")}
              />
            </Pressable>
          </View>
        </LinearGradient>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer6Visible}>
        <View style={styles.groupContainer6Overlay}>
          <Pressable
            style={styles.groupContainer6Bg}
            onPress={closeGroupContainer6}
          />
          <Categories onClose={closeGroupContainer6} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={userIconVisible}>
        <View style={styles.userIconOverlay}>
          <Pressable style={styles.userIconBg} onPress={closeUserIcon} />
          <Connexion onClose={closeUserIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={menuIconVisible}>
        <View style={styles.menuIconOverlay}>
          <Pressable style={styles.menuIconBg} onPress={closeMenuIcon} />
          <Menu onClose={closeMenuIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    backgroundColor: Color.skyblue,
    width: "46.88%",
    borderRadius: Border.br_3xs,
    height: 224,
  },
  iconPosition: {
    height: 100,
    top: 25,
    position: "absolute",
  },
  coursTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  demaragePosition: {
    left: "0%",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  lesCoursPosition: {
    marginLeft: -149,
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: 50,
    position: "absolute",
  },
  videoTypo: {
    fontSize: FontSize.size_sm,
    top: 58,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  progresionPosition: {
    marginLeft: -36.5,
    left: "50%",
    position: "absolute",
  },
  iconParentPosition: {
    width: 50,
    left: "50%",
    top: 0,
  },
  languageLearningAppLayout: {
    height: 70,
    maxWidth: "100%",
    top: 70,
    width: "19.44%",
    overflow: "hidden",
    position: "absolute",
  },
  userPosition: {
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    marginTop: -6,
    width: "100%",
  },
  javascriptLogo1Icon: {
    marginLeft: -44,
    width: 88,
    left: "50%",
  },
  coursDeJavascript: {
    left: 21,
    width: 108,
    top: 145,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  javascriptLogo1Parent: {
    left: "53.13%",
    overflow: "hidden",
    right: "0%",
    top: 0,
    position: "absolute",
  },
  cSharp800x8001Icon: {
    left: 25,
    width: 100,
  },
  coursDeC: {
    left: 15,
    top: 145,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  cSharp800x8001Parent: {
    right: "53.13%",
    backgroundColor: Color.skyblue,
    width: "46.88%",
    borderRadius: Border.br_3xs,
    height: 224,
  },
  frameParent: {
    width: "88.89%",
    top: 465,
    right: "5.56%",
    left: "5.56%",
    height: 224,
    position: "absolute",
  },
  lesCours: {
    top: 423,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  pdfIcon: {
    width: 50,
    left: "50%",
    top: 0,
    marginLeft: -24.5,
  },
  fichierPdf: {
    marginLeft: -38.5,
    left: "50%",
    position: "absolute",
  },
  pdfParent: {
    marginLeft: 66.5,
    width: 77,
    height: 75,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  instagramLiveIcon: {
    marginLeft: -25,
    width: 50,
    left: "50%",
    top: 0,
  },
  enDirect: {
    marginLeft: -30,
    left: "50%",
    position: "absolute",
  },
  instagramLiveParent: {
    width: 60,
    height: 75,
    top: 0,
  },
  video: {
    marginLeft: -20,
    left: "50%",
    position: "absolute",
  },
  playParent: {
    marginLeft: -143.5,
    height: 75,
    position: "absolute",
  },
  groupParent: {
    marginLeft: -137,
    top: 318,
    width: 287,
    height: 75,
    left: "50%",
    position: "absolute",
  },
  progresion: {
    fontSize: FontSize.size_sm,
    top: 58,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  podiumParent: {
    marginLeft: 75.5,
    width: 73,
    height: 75,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  classe: {
    marginLeft: -23,
    left: "50%",
    position: "absolute",
  },
  onlineClassParent: {
    marginLeft: -24.5,
    width: 50,
    height: 75,
    position: "absolute",
  },
  groupContainer6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  categories: {
    marginLeft: -37,
    left: "50%",
    position: "absolute",
  },
  categoriesParent: {
    marginLeft: -148.5,
    width: 74,
    height: 75,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    top: 211,
    width: 297,
    height: 75,
  },
  demarageChild: {
    width: "80.56%",
    top: 132,
    right: "9.72%",
    left: "9.72%",
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  searchingTheWebOnTablet: {
    right: "26.39%",
    left: "54.17%",
  },
  languageLearningApp: {
    right: "65.28%",
    left: "15.28%",
  },
  userIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  userIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    marginLeft: 125,
  },
  user: {
    width: 30,
    height: 30,
    left: "50%",
  },
  lesCoursDisponible: {
    marginTop: -3,
    left: 59,
    width: 202,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  menuIconOverlay: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    marginLeft: -155,
  },
  userParent: {
    top: 24,
    left: 20,
    width: 320,
    overflow: "hidden",
  },
  demarage: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 190,
    backgroundColor: "transparent",
    right: "0%",
    width: "100%",
  },
  cours: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Cours;
