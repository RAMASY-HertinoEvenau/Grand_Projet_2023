import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const Connexion = ({ onClose }) => {
  return (
    <View style={styles.connexion}>
      <Pressable style={styles.vousNavezPasEncoreDeCompWrapper}>
        <Text style={styles.vousNavezPasContainer}>
          <Text style={[styles.vousNavezPasEncoreDeComp, styles.text1Typo]}>
            <Text
              style={styles.vousNavezPas}
            >{`Vous n’avez pas encore de compte? `}</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.inscription1}>Inscription</Text>
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>{` `}</Text>
        </Text>
      </Pressable>
      <Pressable style={styles.seConnecterWrapper}>
        <Text style={[styles.seConnecter, styles.connexion1Text]}>
          Se connecter
        </Text>
      </Pressable>
      <Text style={[styles.motDePasse, styles.motDePasseTypo]}>
        Mot de passe oublié ?
      </Text>
      <TextInput
        style={[styles.connexionChild, styles.connexionLayout]}
        label="Mot de passe"
        mode="outlined"
        right={<TextInput.Icon style={{ marginTop: "50%" }} name="security" />}
        theme={{ colors: { background: "#fff" } }}
      />
      <TextInput
        style={[styles.connexionItem, styles.connexionLayout]}
        label="Identifiant"
        mode="outlined"
        right={<TextInput.Icon style={{ marginTop: "50%" }} name="account" />}
        theme={{ colors: { background: "#fff" } }}
      />
      <Text style={[styles.connexion1, styles.connexion1Text]}>Connexion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  connexion1Text: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  motDePasseTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  connexionLayout: {
    height: 30,
    borderStyle: "solid",
    left: "13.2%",
    right: "10.8%",
    width: "76%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  vousNavezPas: {
    color: Color.black,
  },
  text: {
    color: Color.deepskyblue,
  },
  vousNavezPasEncoreDeComp: {
    fontFamily: FontFamily.interRegular,
  },
  inscription1: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textDecoration: "underline",
  },
  text1: {
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  vousNavezPasContainer: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  vousNavezPasEncoreDeCompWrapper: {
    marginLeft: -117,
    top: 276,
    width: 234,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  seConnecter: {
    color: Color.white,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    alignSelf: "stretch",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  seConnecterWrapper: {
    width: "36%",
    top: 223,
    right: "32%",
    left: "32%",
    backgroundColor: Color.limegreen,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 33,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    position: "absolute",
  },
  motDePasse: {
    marginLeft: -92,
    top: 193,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#ff0000",
    textDecoration: "underline",
    left: "50%",
    position: "absolute",
  },
  connexionChild: {
    top: 148,
  },
  connexionItem: {
    top: 93,
  },
  connexion1: {
    marginLeft: -50,
    top: 40,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    width: 109,
    fontWeight: "700",
    color: Color.black,
    left: "50%",
    position: "absolute",
  },
  connexion: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    width: 250,
    height: 316,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Connexion;
