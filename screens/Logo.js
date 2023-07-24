import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Logo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logo}>
      <Pressable
        style={styles.logoIspm1}
        onPress={() => navigation.navigate("Demarage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/logo-ispm-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -140,
    marginLeft: -150,
    height: "100%",
    width: "100%",
  },
  logoIspm1: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 300,
    height: 279,
  },
  logo: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Logo;
