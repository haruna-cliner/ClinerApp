import React from "react";
import { Provider } from "react-redux";
import store from "./state/store";
import Main from "./routers/Main";
import logger from "./utils/logger";
import "intl";
import "intl/locale-data/jsonp/en";

const Boot = () => {
  logger.log("Boot");
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default Boot;
