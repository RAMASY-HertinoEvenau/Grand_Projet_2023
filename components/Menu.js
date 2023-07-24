import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Menu = ({ onClose }) => {
  return (
    <View style={styles.menu}>
      <View style={[styles.monParcoursWrapper, styles.wrapperLayout]}>
        <Text style={[styles.monParcours, styles.eduxpertFlexBox]}>
          Mon parcours
        </Text>
      </View>
      <View style={[styles.coursRecommandsWrapper, styles.coursWrapperLayout]}>
        <Text style={[styles.coursRecommands, styles.eduxpertFlexBox]}>
          Cours recommandés
        </Text>
      </View>
      <View style={[styles.coursSuivisWrapper, styles.coursWrapperLayout]}>
        <Text style={[styles.coursRecommands, styles.eduxpertFlexBox]}>
          Cours suivis
        </Text>
      </View>
      <View style={styles.menuChild} />
      <View style={[styles.mesCoursWrapper, styles.wrapperLayout]}>
        <Text style={[styles.monParcours, styles.eduxpertFlexBox]}>
          Mes cours
        </Text>
      </View>
      <Text style={[styles.eduxpert, styles.eduxpertFlexBox]}>EduXpert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 38,
    width: 186,
    borderBottomRightRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  eduxpertFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  coursWrapperLayout: {
    height: 25,
    width: 150,
    left: 31,
    position: "absolute",
    overflow: "hidden",
  },
  monParcours: {
    top: 9,
    left: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
  },
  monParcoursWrapper: {
    top: 177,
    backgroundColor: Color.white,
    width: 186,
    borderBottomRightRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    left: 0,
  },
  coursRecommands: {
    top: 4,
    left: 10,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
  },
  coursRecommandsWrapper: {
    top: 144,
  },
  coursSuivisWrapper: {
    top: 109,
  },
  menuChild: {
    top: 92,
    left: 29,
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderRightWidth: 2,
    width: 2,
    height: 82,
    position: "absolute",
  },
  mesCoursWrapper: {
    top: 55,
    backgroundColor: "#11e7cd",
  },
  eduxpert: {
    top: 10,
    left: "12%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  menu: {
    width: 250,
    height: 740,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Menu;
