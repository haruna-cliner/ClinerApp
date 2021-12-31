import {MMKV} from 'react-native-mmkv';

const storage = new MMKV({
    id: 'vsp_cache_data',
});
const prefix = 'cache';

const store = (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now(),
        };
        storage.set(prefix + key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
};

const get = (key) => {
    try {
        const value = storage.getString(prefix + key);
        //console.log('Value', prefix, value);

        if (!value || value === 'undefined' || value === 'null') {
            return null;
        }

        const item = JSON.parse(value);
        if (!item) {
            return null;
        }
        return item.value;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const clear = (key) => {
    if (key) {
        storage.delete(key);
        return;
    }
    storage.clearAll();
};

export default {
    store,
    get,
    clear,
};
