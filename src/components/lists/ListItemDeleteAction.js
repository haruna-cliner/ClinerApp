import React from "react";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import colors from "../../themes/colors";

const ListItemDeleteAction = ({ onPress }) => {
  return (<TouchableWithoutFeedback style={styles.container} onPress={onPress}>
    <Icon
      name="delete"
      color="white"
      style={styles.icon}
    />
  </TouchableWithoutFeedback>);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger, width: 70, justifyContent: "center", alignItems: "center", flex: 1,
  }, icon: {
    fontSize: 30, color: colors.white,
  },
});

export default ListItemDeleteAction;
