import {
    getBrand,
    getModel,
    getSystemName,
    getSystemVersion,
} from 'react-native-device-info';

export const getDeviceInfo = () => ({
    brandName: getBrand(),
    modelName: getModel(),
    osName: getSystemName(),
    osVersion: getSystemVersion(),
});