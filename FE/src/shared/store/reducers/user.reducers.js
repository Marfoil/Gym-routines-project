import { setUserType } from "../actions/user.actions";


export const userInitialState = {
    username: ''
}

export const userState = (state = userInitialState, action) => {
    switch (action.type) {
        case setUserType:
            return {
                ...state,
                username: action.payload.username
            }
        default:
            return state;
    }
}