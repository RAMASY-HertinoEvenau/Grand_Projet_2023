import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import Connexion from "../components/Connexion";
import Menu from "../components/Menu";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Accueil = () => {
  const [userIconVisible, setUserIconVisible] = useState(false);
  const [menuIconVisible, setMenuIconVisible] = useState(false);

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
      <View style={styles.accueil}>
        <Pressable style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.deliveryTimeParent, styles.parentPosition]}>
            <Image
              style={styles.deliveryTimeIcon}
              contentFit="cover"
              source={require("../assets/delivery-time.png")}
            />
            <Text style={styles.heures}>6 Heures</Text>
          </View>
          <View style={[styles.noConnectionParent, styles.connectionLayout]}>
            <Image
              style={styles.deliveryTimeIcon}
              contentFit="cover"
              source={require("../assets/no-connection.png")}
            />
            <Text style={styles.heures}>Facile</Text>
          </View>
          <Text
            style={[styles.aprennezLesBases, styles.aprennezLesBasesPosition]}
          >
            Aprennez les bases du langage de développement python
          </Text>
          <Text style={[styles.coursSurLe, styles.coursTypo]}>
            Cours sur le développement
          </Text>
          <View style={[styles.frame, styles.framePosition]}>
            <Text
              style={[styles.leLangagePython, styles.langageLayout]}
            >{`Le langage
python`}</Text>
            <Image
              style={[styles.pythonIcon, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/python.png")}
            />
          </View>
        </Pressable>
        <Pressable style={[styles.frameContainer, styles.frameLayout]}>
          <View style={[styles.deliveryTimeGroup, styles.groupPosition]}>
            <Image
              style={styles.deliveryTimeIcon}
              contentFit="cover"
              source={require("../assets/delivery-time.png")}
            />
            <Text style={styles.heures}>6 Heures</Text>
          </View>
          <View style={[styles.noConnectionGroup, styles.groupPosition]}>
            <Image
              style={styles.deliveryTimeIcon}
              contentFit="cover"
              source={require("../assets/no-connection.png")}
            />
            <Text style={styles.heures}>Facile</Text>
          </View>
          <Text
            style={[
              styles.dcouvrezLeFonctionnement,
              styles.aprennezLesBasesPosition,
            ]}
          >
            Découvrez le fonctionnement du langage react js
          </Text>
          <Text style={[styles.coursSurLe1, styles.coursTypo]}>
            Cours sur le développement web
          </Text>
          <View style={[styles.leLangageReactJsParent, styles.langageLayout]}>
            <Text
              style={[styles.leLangageReact, styles.langageLayout]}
            >{`Le langage
react js`}</Text>
            <Image
              style={styles.r11}
              contentFit="cover"
              source={require("../assets/r-1-1.png")}
            />
          </View>
        </Pressable>
        <Text style={[styles.coursRecommander, styles.bonjourTypo]}>
          Cours recommander
        </Text>
        <ScrollView
          style={styles.frameScrollview}
          horizontal={true}
          indicatorStyle="default"
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Pressable style={styles.htmlCssWrapper}>
            <Text style={styles.pythonTypo}>Html - Css</Text>
          </Pressable>
          <Pressable style={[styles.gitGithubWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.pythonTypo}>Git - GitHub</Text>
          </Pressable>
          <Pressable style={[styles.pythonWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.python, styles.pythonTypo]}>Python</Text>
          </Pressable>
          <Pressable style={[styles.pythonWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.pythonTypo}>Le web</Text>
          </Pressable>
          <Pressable style={[styles.javascriptWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.pythonTypo}>JavaScript</Text>
          </Pressable>
          <Pressable style={[styles.flutterWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.pythonTypo}>Flutter</Text>
          </Pressable>
        </ScrollView>
        <View style={[styles.demarageParent, styles.demarageLayout]}>
          <LinearGradient
            style={[styles.demarage, styles.demarageLayout]}
            locations={[0, 0.51, 0.94]}
            colors={["#87ceeb", "#1e90ff", "#87ceeb"]}
          />
          <TextInput
            style={styles.groupChild}
            placeholder="Rechercher un cours "
            mode="outlined"
            right={
              <TextInput.Icon style={{ marginTop: "50%" }} name="magnify" />
            }
            theme={{ colors: { background: "#fff" } }}
          />
          <Image
            style={styles.womanLearningByReadingABo}
            contentFit="cover"
            source={require("../assets/woman-learning-by-reading-a-book.png")}
          />
          <Text style={styles.commencerApprendre}>{`Commencer à
apprendre`}</Text>
        </View>
        <View style={styles.userParent}>
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
          <Text style={[styles.bonjour, styles.userPosition]}>Bonjour</Text>
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
      </View>

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
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  parentLayout: {
    height: 35,
    alignItems: "center",
  },
  frameLayout: {
    height: 270,
    backgroundColor: Color.skyblue,
    top: 420,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  parentPosition: {
    marginLeft: -68,
    height: 25,
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  connectionLayout: {
    width: 77,
    alignItems: "center",
  },
  aprennezLesBasesPosition: {
    width: 145,
    top: 114,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: "50%",
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  coursTypo: {
    width: 152,
    color: Color.royalblue,
    textDecoration: "underline",
    top: 70,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  framePosition: {
    height: 70,
    top: 0,
    position: "absolute",
  },
  langageLayout: {
    width: 75,
    position: "absolute",
  },
  groupPosition: {
    marginLeft: -66.5,
    height: 25,
    left: "50%",
    position: "absolute",
    flexDirection: "row",
  },
  bonjourTypo: {
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
  },
  wrapperFlexBox: {
    marginLeft: 5,
    justifyContent: "center",
    height: 30,
    backgroundColor: Color.royalblue,
    borderRadius: Border.br_8xs,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  pythonTypo: {
    color: Color.mintcream,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  demarageLayout: {
    height: 190,
    position: "absolute",
  },
  userPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    marginTop: -7,
    width: "100%",
  },
  deliveryTimeIcon: {
    width: 25,
    height: 25,
  },
  heures: {
    fontSize: FontSize.size_smi,
    marginLeft: 15,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
  },
  deliveryTimeParent: {
    top: 232,
    height: 25,
    width: 97,
    left: "50%",
  },
  noConnectionParent: {
    top: 197,
    height: 25,
    left: "50%",
    marginLeft: -68,
    position: "absolute",
    flexDirection: "row",
  },
  aprennezLesBases: {
    marginLeft: -72.97,
  },
  coursSurLe: {
    marginLeft: -73.92,
  },
  leLangagePython: {
    top: 12,
    left: 72,
    fontSize: FontSize.size_sm,
    width: 75,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
  },
  pythonIcon: {
    left: 0,
    width: 72,
  },
  frame: {
    marginLeft: -76.97,
    width: 155,
    left: "50%",
    overflow: "hidden",
  },
  frameGroup: {
    width: "42.78%",
    right: "5%",
    left: "52.22%",
  },
  deliveryTimeGroup: {
    top: 215,
    width: 97,
  },
  noConnectionGroup: {
    top: 180,
    width: 77,
    alignItems: "center",
  },
  dcouvrezLeFonctionnement: {
    marginLeft: -72.58,
  },
  coursSurLe1: {
    marginLeft: -74.5,
  },
  leLangageReact: {
    top: 10,
    left: 37,
    fontSize: FontSize.size_sm,
    width: 75,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    textAlign: "left",
  },
  r11: {
    top: 4,
    left: -33,
    width: 67,
    height: 60,
    position: "absolute",
  },
  leLangageReactJsParent: {
    marginLeft: -37.5,
    top: 3,
    height: 34,
    left: "50%",
  },
  frameContainer: {
    width: "43.06%",
    right: "51.95%",
    left: "5%",
  },
  coursRecommander: {
    marginLeft: -159,
    top: 379,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    left: "50%",
    position: "absolute",
  },
  htmlCssWrapper: {
    justifyContent: "center",
    backgroundColor: Color.royalblue,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_9xs,
    height: 30,
    width: 90,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  gitGithubWrapper: {
    width: 101,
    paddingHorizontal: Padding.p_9xs,
    marginLeft: 5,
  },
  python: {
    width: 55,
  },
  pythonWrapper: {
    width: 70,
    paddingHorizontal: Padding.p_6xs,
  },
  javascriptWrapper: {
    paddingHorizontal: Padding.p_9xs,
    marginLeft: 5,
    width: 90,
  },
  flutterWrapper: {
    paddingHorizontal: Padding.p_9xs,
    marginLeft: 5,
    width: 60,
  },
  frameScrollview: {
    top: 310,
    left: 2,
    position: "absolute",
    width: "100%",
  },
  demarage: {
    width: "98.85%",
    right: "1.15%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    top: 0,
    height: 190,
    overflow: "hidden",
  },
  groupChild: {
    width: "83.57%",
    top: 133,
    right: "9.8%",
    left: "6.63%",
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  womanLearningByReadingABo: {
    width: "57.06%",
    top: 9,
    right: "0%",
    left: "42.94%",
    maxWidth: "100%",
    height: 120,
    position: "absolute",
    overflow: "hidden",
  },
  commencerApprendre: {
    width: "47.84%",
    top: 17,
    left: "2.88%",
    fontSize: 24,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    height: 55,
    position: "absolute",
    textAlign: "left",
  },
  demarageParent: {
    width: "96.39%",
    top: 90,
    right: "1.39%",
    left: "2.22%",
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
    top: "50%",
  },
  bonjour: {
    marginTop: -4,
    marginLeft: -42,
    width: 83,
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "left",
    top: "50%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  accueil: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Accueil;
