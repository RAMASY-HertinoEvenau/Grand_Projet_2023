const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Logo from "./screens/Logo";
import Demarage from "./screens/Demarage";
import Accueil from "./screens/Accueil";
import Cours from "./screens/Cours";
import Notification1 from "./screens/Notification1";
import Parametre from "./screens/Parametre";
import Icon1 from "./components/Icon1";
import Video1 from "./screens/Video1";
import VideoLive from "./screens/VideoLive";
import FichierPDF from "./screens/FichierPDF";
import FrameComponent7 from "./components/Frame22";
import FrameComponent6 from "./components/Frame7";
import FrameComponent5 from "./components/Frame6";
import FrameComponent4 from "./components/Frame3";
import FrameComponent3 from "./components/Frame41";
import FrameComponent2 from "./components/Frame4";
import FrameComponent1 from "./components/Frame21";
import FrameComponent from "./components/Frame2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <FrameComponent6 />,
    <FrameComponent4 />,
    <FrameComponent2 />,
    <FrameComponent />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <FrameComponent7 />,
    <FrameComponent5 />,
    <FrameComponent3 />,
    <FrameComponent1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: "100%",
              backgroundColor: "#f7fcf7",
              height: 60,
              flexDirection: "row",
              paddingHorizontal: 34,
              paddingVertical: 4,
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cours"
        component={Cours}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Parametre"
        component={Parametre}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Logo"
              component={Logo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Demarage"
              component={Demarage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Video"
              component={Video1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VideoLive"
              component={VideoLive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FichierPDF"
              component={FichierPDF}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
