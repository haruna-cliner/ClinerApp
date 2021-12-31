import {useState} from 'react';

let useFunction = (apiFunc,raw = []) => {
    const [data, setData] = useState(raw);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try {
            const response = await apiFunc(...args);
            setLoading(false);

            setData(response);
            return response;
        } catch (e) {
            setError(true);
        }
    };

    const changeData = (value = {}) => {
        setData(value);
    };

    return {data, error, loading, request, changeData};
};
export default useFunction;
