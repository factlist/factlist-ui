const STORAGE_TOKEN_KEY = 'factlist_token';
const USER_KEY = 'factlist_user';

export const saveToken = (token) => localStorage.setItem(STORAGE_TOKEN_KEY, token)

export const removeToken = () => localStorage.removeItem(STORAGE_TOKEN_KEY)

export const getToken = () => localStorage.getItem(STORAGE_TOKEN_KEY)

export const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user))

export const removeUser = () => localStorage.removeItem(USER_KEY)

export const getUser = () => localStorage.getItem(USER_KEY)
