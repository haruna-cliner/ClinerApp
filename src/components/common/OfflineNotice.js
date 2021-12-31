import React, { useEffect, useState } from "react";
import * as NetInfo from "@react-native-community/netinfo";
import { useNetInfo } from "@react-native-community/netinfo";
import logger from "../../utils/logger";
import flashMessage from "../../utils/flashMessage";

function OfflineNotice() {
  const netInfo = useNetInfo();
  const [on, setOn] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      logger.log("NETWORK", netInfo, state);
      if (state.type === "none" || (state.type !== "unknown" && state.isConnected === false)) {
        setOn(false);
      }
    });
    return () => {
      logger.log("Unsubscribing.....");
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (on) {
      flashMessage.danger("Error", "No Internet Connection", { autoHide: false });
    }
  }, [on]);

  return null;
}

export default OfflineNotice;
