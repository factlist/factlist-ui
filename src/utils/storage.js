const STORAGE_TOKEN_KEY = 'factlist_token'

export const saveToken = (token) => localStorage.setItem(STORAGE_TOKEN_KEY, token)

export const removeToken = () => localStorage.removeItem(STORAGE_TOKEN_KEY)

export const getToken = () => localStorage.getItem(STORAGE_TOKEN_KEY)
