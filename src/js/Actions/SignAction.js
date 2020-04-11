export const setUserId = (id) => {
    return {
        type: "SET_USER_ID",
        payload: id
    }
}
export const setAuthToken = (token) => {
    return {
        type: "SET_AUTH_TOKEN",
        payload:token
    }
}