const initialState = {
    userId : undefined,
    authToken: undefined

}
const SignIn = (state = initialState, action) =>{
    switch(action.type) {
        case "SET_USER_ID" : return {
            ...state,
            userId: action.payload
        }
        case "SET_AUTH_TOKEN": return {
            ...state,
            authToken: action.payload
        }
        default: return state
    }
}
export default SignIn;