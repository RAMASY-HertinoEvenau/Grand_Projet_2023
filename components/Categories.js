import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "@rneui/themed";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Categories = ({ onClose }) => {
  const [ellipseSwitchValue, setEllipseSwitchValue] = useState(undefined);
  const [ellipseSwitch1Value, setEllipseSwitch1Value] = useState(undefined);

  return (
    <View style={styles.categories}>
      <View style={[styles.programationParent, styles.parentPosition]}>
        <Text style={[styles.programation, styles.gestionTypo]}>
          Programation
        </Text>
        <Switch
          style={styles.frameChild}
          value={ellipseSwitchValue}
          onValueChange={setEllipseSwitchValue}
          color="#fefefe"
        />
      </View>
      <View style={[styles.gestionParent, styles.parentPosition]}>
        <Text style={[styles.gestion, styles.gestionTypo]}>Gestion</Text>
        <Switch
          style={styles.frameChild}
          value={ellipseSwitch1Value}
          onValueChange={setEllipseSwitch1Value}
          color="#fefefe"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 40,
    backgroundColor: Color.whitesmoke_100,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gestionTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    left: "11.06%",
    top: 10,
    position: "absolute",
  },
  programation: {
    width: "46.9%",
  },
  frameChild: {
    top: 15,
    right: 20,
    width: 10,
    height: 10,
    position: "absolute",
  },
  programationParent: {
    top: 5,
  },
  gestion: {
    width: "27.43%",
  },
  gestionParent: {
    top: 50,
  },
  categories: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 226,
    height: 95,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default Categories;
