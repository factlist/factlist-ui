const jwtKey = 'jwt'

export const getJWT = () => localStorage.getItem(jwtKey)

export const saveJWT = token => localStorage.setItem(jwtKey, token)

export const removeJWT = () => localStorage.removeItem(jwtKey)
