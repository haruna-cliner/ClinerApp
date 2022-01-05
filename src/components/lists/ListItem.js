import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../themes/colors";
import { Icon } from "react-native-elements";

const ListItem = ({ title, onPress, renderRightActions, IconComponent }) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.green} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
        <Icon
          name="chevron-right"
          size={24}
          color={colors.black}
        />
      </View>
    </TouchableHighlight>
  </Swipeable>);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", backgroundColor: colors.white, padding: 15, alignItems: "center",
  }, details: {
    justifyContent: "center", marginLeft: 10, flex: 1,
  }, title: {
    fontSize: 16, fontWeight: "600",
  },
});

export default ListItem;
