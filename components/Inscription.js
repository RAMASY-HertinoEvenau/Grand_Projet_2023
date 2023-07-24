import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Inscription = ({ onClose }) => {
  return (
    <View style={styles.inscription}>
      <Pressable style={styles.vousAvezDjCompteConnexiWrapper}>
        <Text style={[styles.vousAvezDjContainer, styles.inscription1FlexBox]}>
          <Text style={styles.vousAvezDjCompte}>
            <Text style={styles.vousAvezDj}>{`Vous avez déjà compte? `}</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.connexion1}>Connexion</Text>
          </Text>
        </Text>
      </Pressable>
      <Pressable style={styles.sinscrireWrapper}>
        <Text style={[styles.sinscrire, styles.sinscrireText]}>S’inscrire</Text>
      </Pressable>
      <TextInput
        style={[styles.inscriptionChild, styles.inscriptionChildLayout]}
        label="Classe"
        mode="outlined"
        right={
          <TextInput.Icon
            style={{ marginTop: "50%" }}
            name="google-classroom"
          />
        }
        theme={{ colors: { background: "#fff" } }}
      />
      <TextInput
        style={[styles.inscriptionItem, styles.inscriptionChildLayout]}
        label="Mot de passe"
        mode="outlined"
        right={<TextInput.Icon style={{ marginTop: "50%" }} name="security" />}
        theme={{ colors: { background: "#fff" } }}
      />
      <TextInput
        style={[styles.inscriptionInner, styles.inscriptionChildLayout]}
        label="Mot de passe"
        mode="outlined"
        right={<TextInput.Icon style={{ marginTop: "50%" }} name="security" />}
        theme={{ colors: { background: "#fff" } }}
      />
      <TextInput
        style={[styles.rectangleTextinput, styles.inscriptionChildLayout]}
        label="Mot de passe"
        mode="outlined"
        right={<TextInput.Icon style={{ marginTop: "50%" }} name="security" />}
        theme={{ colors: { background: "#fff" } }}
      />
      <TextInput
        style={[styles.inscriptionChild1, styles.inscriptionChildLayout]}
        label="Identifiant"
        mode="outlined"
        right={<TextInput.Icon style={{ marginTop: "50%" }} name="account" />}
        theme={{ colors: { background: "#fff" } }}
      />
      <Text style={[styles.inscription1, styles.sinscrireText]}>
        Inscription
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inscription1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  sinscrireText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  inscriptionChildLayout: {
    height: 30,
    borderStyle: "solid",
    left: "13.2%",
    right: "10.8%",
    width: "76%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  vousAvezDj: {
    color: Color.black,
  },
  text: {
    color: Color.deepskyblue,
  },
  vousAvezDjCompte: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  connexion1: {
    fontSize: FontSize.size_2xs,
    textDecoration: "underline",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  vousAvezDjContainer: {
    top: 0,
    left: 0,
    width: 180,
  },
  vousAvezDjCompteConnexiWrapper: {
    marginLeft: -90,
    top: 401,
    height: 13,
    width: 180,
    left: "50%",
    position: "absolute",
  },
  sinscrire: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  sinscrireWrapper: {
    width: "36%",
    top: 348,
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
    justifyContent: "center",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  inscriptionChild: {
    top: 293,
  },
  inscriptionItem: {
    top: 243,
  },
  inscriptionInner: {
    top: 193,
  },
  rectangleTextinput: {
    top: 143,
  },
  inscriptionChild1: {
    top: 93,
  },
  inscription1: {
    marginLeft: -50,
    top: 40,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    width: 109,
    fontWeight: "700",
    color: Color.black,
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  inscription: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    width: 250,
    height: 441,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Inscription;
