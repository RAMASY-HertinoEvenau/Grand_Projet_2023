import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Switch } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Parametre = () => {
  const [ellipseSwitchValue, setEllipseSwitchValue] = useState(undefined);
  const [ellipseSwitch1Value, setEllipseSwitch1Value] = useState(undefined);
  const [ellipseSwitch2Value, setEllipseSwitch2Value] = useState(undefined);
  const [ellipseSwitch3Value, setEllipseSwitch3Value] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.parametre}>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View
          style={[styles.privacyPolicyAnalyticsWrapper, styles.wrapperPosition]}
        >
          <Text
            style={[styles.privacyPolicy, styles.nouvelleFlexBox]}
          >{`Privacy Policy & Analytics`}</Text>
        </View>
        <View style={[styles.termesDeServicesWrapper, styles.wrapperPosition]}>
          <Text style={[styles.termesDeServices, styles.nouvelleFlexBox]}>
            Termes de services
          </Text>
        </View>
        <View style={[styles.aideWrapper, styles.wrapperPosition]}>
          <Text style={[styles.aide, styles.nouvelleFlexBox]}>Aide</Text>
        </View>
        <View
          style={[styles.laisserUnCommentaireWrapper, styles.wrapperPosition]}
        >
          <Text style={[styles.laisserUnCommentaire, styles.nouvelleFlexBox]}>
            Laisser un commentaire
          </Text>
        </View>
        <View style={[styles.nouveautWrapper, styles.wrapperPosition]}>
          <Text style={[styles.nouveaut, styles.nouvelleFlexBox]}>
            Nouveauté
          </Text>
        </View>
      </View>
      <Text
        style={[styles.plusDoption, styles.generalTypo]}
      >{`Plus d’option  `}</Text>
      <View style={[styles.frameGroup, styles.frameLayout]}>
        <View style={[styles.aideWrapper, styles.wrapperPosition]} />
        <View
          style={[styles.laisserUnCommentaireWrapper, styles.wrapperPosition]}
        >
          <Text style={[styles.langage, styles.nouvelleFlexBox]}>Langage</Text>
        </View>
        <View style={[styles.nouveautWrapper, styles.wrapperPosition]}>
          <Text style={[styles.thme, styles.nouvelleFlexBox]}>Thème</Text>
        </View>
      </View>
      <Text style={[styles.general, styles.generalTypo]}>General</Text>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={[styles.termesDeServicesWrapper, styles.wrapperPosition]}>
          <Text style={[styles.nouvelleFichierPdf, styles.nouvelleFlexBox]}>
            Nouvelle fichier pdf
          </Text>
          <Switch
            style={styles.frameItem}
            value={ellipseSwitchValue}
            onValueChange={setEllipseSwitchValue}
            color="#fefefe"
          />
        </View>
        <View style={[styles.aideWrapper, styles.wrapperPosition]}>
          <Text style={[styles.nouvelleCoursAjout, styles.nouvelleFlexBox]}>
            Nouvelle cours ajouté
          </Text>
          <Switch
            style={styles.frameItem}
            value={ellipseSwitch1Value}
            onValueChange={setEllipseSwitch1Value}
            color="#fefefe"
          />
        </View>
        <View
          style={[styles.laisserUnCommentaireWrapper, styles.wrapperPosition]}
        >
          <Text style={[styles.nouvelleVido, styles.nouvelleFlexBox]}>
            Nouvelle vidéo
          </Text>
          <Switch
            style={styles.frameItem}
            value={ellipseSwitch2Value}
            onValueChange={setEllipseSwitch2Value}
            color="#fefefe"
          />
        </View>
        <View style={[styles.nouveautWrapper, styles.wrapperPosition]}>
          <Switch
            style={styles.frameItem}
            checked={false}
            disabled={false}
            value={ellipseSwitch3Value}
            onValueChange={setEllipseSwitch3Value}
            color="#fefefe"
          />
          <Text style={[styles.vidoEnDirect, styles.nouvelleFlexBox]}>
            Vidéo en direct
          </Text>
        </View>
      </View>
      <Text style={[styles.notification, styles.generalTypo]}>
        Notification
      </Text>
      <View style={styles.paramtreParent}>
        <Text style={[styles.paramtre, styles.nouvelleFlexBox]}>Paramètre</Text>
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
  frameLayout: {
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_3xs,
    width: "94.44%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperPosition: {
    height: 40,
    backgroundColor: Color.gainsboro_100,
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  nouvelleFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  generalTypo: {
    color: Color.darkgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: "2.78%",
    position: "absolute",
  },
  leftLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  privacyPolicy: {
    width: "52.35%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  privacyPolicyAnalyticsWrapper: {
    top: 165,
  },
  termesDeServices: {
    width: "42.06%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  termesDeServicesWrapper: {
    top: 124,
  },
  aide: {
    width: "15.88%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  aideWrapper: {
    top: 83,
  },
  laisserUnCommentaire: {
    width: "47.65%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  laisserUnCommentaireWrapper: {
    top: 42,
  },
  nouveaut: {
    width: "23.24%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  nouveautWrapper: {
    top: 1,
  },
  frameParent: {
    top: 490,
    height: 206,
    left: "2.78%",
    right: "2.78%",
    borderRadius: Border.br_3xs,
    width: "94.44%",
  },
  plusDoption: {
    top: 463,
  },
  langage: {
    width: "18.24%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  thme: {
    width: "29.12%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  frameGroup: {
    top: 319,
    height: 124,
    left: "2.78%",
    right: "2.78%",
    borderRadius: Border.br_3xs,
    width: "94.44%",
  },
  general: {
    top: 292,
  },
  nouvelleFichierPdf: {
    width: "39.41%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  frameItem: {
    top: 15,
    right: 30,
    width: 10,
    height: 10,
    position: "absolute",
  },
  nouvelleCoursAjout: {
    width: "43.53%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  nouvelleVido: {
    width: "30.29%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  vidoEnDirect: {
    width: "32.06%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: "7.35%",
    top: 11,
    color: Color.black,
  },
  frameContainer: {
    top: 107,
    right: "3.33%",
    left: "2.22%",
    height: 165,
    borderRadius: Border.br_3xs,
    width: "94.44%",
  },
  notification: {
    top: 80,
  },
  paramtre: {
    top: 25,
    left: "19.44%",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  leftArrowIcon: {
    left: 0,
    top: 0,
  },
  leftArrowWrapper: {
    top: 22,
    left: 20,
  },
  paramtreParent: {
    backgroundColor: Color.skyblue,
    height: 60,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  parametre: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Parametre;
