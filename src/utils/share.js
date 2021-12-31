import {Linking} from 'react-native';
import {PLATFORM_URL} from './constants';

export const openInBrowser = async (url) => {
    await Linking.openURL(url || PLATFORM_URL);
};
