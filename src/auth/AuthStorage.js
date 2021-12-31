import SecureStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import jwtDecode from 'jwt-decode';
import logger from '../utils/logger';

const key = 'authToken';
const registerKey = 'passKey';
const pushKey = 'pushKey';

const secureStore = async (keyString, content) => await SecureStore.set(keyString, content, {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY});

const storeToken = async (authToken) => {
    try {
        await secureStore(key, authToken);
    } catch (error) {
        logger.log('ErrorStoreAuthToken', error);
    }
};

const getToken = async () => {
    try {
        return await SecureStore.get(key);
    } catch (error) {
        console.log('ErrorGetAuthToken', error);
    }
};

const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
    try {
        await SecureStore.remove(key);
    } catch (error) {
        console.log('ErrorRemoveAuthToken', error);
    }
};

const storeRegister = async (register) => {
    try {
        await secureStore(registerKey, JSON.stringify(register));
    } catch (e) {
        logger.log(e);
    }
};

const getRegister = async (temp = true) => {
    try {
        let s = await SecureStore.get(registerKey);
        if (temp) {
            await SecureStore.remove(registerKey);
        }
        return JSON.parse(s);
    } catch (e) {
        logger.log('NotTokenStored', e);
        return null;
    }
};

const storePush = async (token) => {
    try {
        await secureStore(pushKey, token);
    } catch (e) {
        logger.log('Push Error', e);
    }
};

const getPush = async () => {
    try {
        return await SecureStore.get(pushKey);
    } catch (e) {
        return null;
    }
};

export default {getToken, getUser, removeToken, storeToken, getRegister, storeRegister, storePush, getPush};