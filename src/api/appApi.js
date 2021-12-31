import client from './client';

const endpoint = '/app/';

const getHome = (body) => client.get(endpoint + 'home', body);
const getPackages = () => client.get(endpoint + 'packages');
const subscribe = (body) => client.post(endpoint + 'subscribe', body);
const me = () => client.get(endpoint + 'me?sub=1');
const getDetail = (id) => client.get(endpoint + `vod/${id}`);
const searchQuery = (query, page) => client.get(`${endpoint}search?page=${page}&query=${query}`);
const typeList = (type = 'latest', id, page = 1) => client.get(`${endpoint}type/${type}/${id}?page=${page}`);


export default {
    getHome,
    getPackages,
    subscribe,
    me,
    getDetail,
    searchQuery,
    typeList,
};