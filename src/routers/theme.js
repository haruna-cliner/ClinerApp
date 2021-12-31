import { DefaultTheme } from "@react-navigation/native";
import Colors from "../themes/colors";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.lightText,
    background: Colors.primaryDark,
  },
};

export default navigationTheme;
