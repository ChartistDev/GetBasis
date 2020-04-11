const initialState = {
    MenutoggleStatus : false
}
const HomePageReducer = (state = initialState, action) => {
    switch(action.type) {
    case "SET_MENU_TOGGLE_STATUS": return {
        ...state,
        MenutoggleStatus: action.payload
    }
    default : return state
    }
}
export default HomePageReducer;