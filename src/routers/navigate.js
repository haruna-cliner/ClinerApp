import React from "react";
import { StackActions } from "@react-navigation/native";

export const navigationRef = React.createRef();

export const navigate = (name, params) => navigationRef.current?.navigate(name, params);

export const pop = () => {
  const popAction = StackActions.pop(1);
  navigationRef.current?.dispatch(popAction);
};
export const push = (name, data) => {
  const pushAction = StackActions.push(name, data);
  navigationRef.current?.dispatch(pushAction);
};

export const replace = (name, data) => {
  const pushAction = StackActions.replace(name, data);
  navigationRef.current?.dispatch(pushAction);
};
