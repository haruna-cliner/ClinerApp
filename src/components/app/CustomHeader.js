import React from "react";
import { Linking, StyleSheet, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomHeader = ({ title, navigation }) => {
  const link = () => {
    Linking.openURL(`https://google.com`).then(console.log);
  };
  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff",
      }}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="description" color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={link}>
            <Icon type="antdesign" name="rocket1" color="white" />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: title, style: styles.heading }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomHeader;
