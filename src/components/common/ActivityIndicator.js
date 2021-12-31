import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

function ActivityIndicator({ visible = false, text = "", height = "100%" }) {
  if (!visible) {
    return <></>;
  }

  return (
    <View style={[styles.overlay, { height }]}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
      />
      {
        !!text &&
        <Text
          style={tw`text-center text-gray-50`}>
          {text}
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.2,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
