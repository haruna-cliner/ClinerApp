import React, {useState} from 'react';
import {PermissionsAndroid} from 'react-native';

const usePermission = (permission) => {
    const [granted, setGranted] = useState(false);

    const request = async () => {
        try {
            const permissionGranted = await PermissionsAndroid.request(permission);
            let status = permissionGranted === PermissionsAndroid.RESULTS.GRANTED;
            setGranted(status);
            return status;
        } catch (e) {
            setGranted(false);
            return false;
        }
    };

    return {request, granted};
};

export default usePermission;
