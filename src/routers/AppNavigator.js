import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import CustomHeader from "../components/app/CustomHeader";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationScreen";

// import tw from "tailwind-react-native-classnames";

function TodosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <CustomHeader title={title} style={options.headerStyle} navigation={navigation} />;
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Todos" component={TodosScreen} />
    </Drawer.Navigator>
  );
}
