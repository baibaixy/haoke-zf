import storage from './storage'
const HAOKE_ZF = 'HAOKE_ZF_TOKEN'
export const setUser = (token) => storage.set(HAOKE_ZF, token)
export const getUser = () => storage.get(HAOKE_ZF)
export const removeUser = () => storage.remove(HAOKE_ZF)
