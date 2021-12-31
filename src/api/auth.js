import client from './client';

const login = (form) => client.post('auth/login', form);

const reset = (form) => client.post('auth/change', form);

export default {
    login, reset,
};
