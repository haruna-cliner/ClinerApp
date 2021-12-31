import React from "react";
import BaseNavigator from "./BaseNavigator";
import Colors from "../themes/colors";
import OfflineNotice from "../components/common/OfflineNotice";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Main = () => (
  <GestureHandlerRootView style={{ flex: 1, backgroundColor: Colors.primaryDark }}>
    <OfflineNotice />
    <BaseNavigator />
  </GestureHandlerRootView>
);

export default Main;
