import { showMessage } from "react-native-flash-message";

let currentHeight = 24;
let DURATION = 10000;

const danger = (title, desc) => {
  showMessage({
    message: title,
    description: desc,
    type: "danger",
    statusBarHeight: currentHeight,
    autoHide: true,
    duration: DURATION,
  });
};

const success = (title, desc, opts = {}) => {
  showMessage({
    message: title,
    description: desc,
    type: "success",
    statusBarHeight: currentHeight,
    autoHide: true,
    duration: DURATION,
    ...opts,
  });
};

const other = (title, desc, types, opts = {}) => {
  showMessage({
    message: title,
    description: desc,
    type,
    statusBarHeight: currentHeight,
    autoHide: true,
    duration: DURATION,
    ...opts,
  });
};

export default {
  danger, success,
};
