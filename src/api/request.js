import request from '../http'

export const registerUser = params => {
    return request('post', '/api/register', params)
}
export const login = params => {
    return request('post', '/api/login', params)
}
export const logout = params => {
    return request('post', '/api/logout', params)
}