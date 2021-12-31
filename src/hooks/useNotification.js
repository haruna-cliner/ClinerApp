import React, { useEffect } from "react";
import NotificationService from "../utils/NotificationService";
import AuthStorage from "../auth/AuthStorage";
import logger from "../utils/logger";

export default function useNotification() {
  const service = new NotificationService(
    async (e) => {
      await AuthStorage.storePush(e.token);
      logger.log("Push Token", e);
    },
    async (e) => {
      //TODO ON ACTION
      //console.log('OnNotification', e);
    },
  );
  useEffect(() => {
    service.checkPermission(e => {
      // console.log('Permission', e);
    });
  }, []);

  return service;
}
