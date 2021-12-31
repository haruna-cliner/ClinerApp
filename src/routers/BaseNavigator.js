import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./navigate";
import navigationTheme from "./theme";
import AppNavigator from "./AppNavigator";

const BaseNavigator = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <FlashMessage position="top" />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default BaseNavigator;
