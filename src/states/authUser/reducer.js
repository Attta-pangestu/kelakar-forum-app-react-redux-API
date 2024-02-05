import { actionType } from "./action";

function authUserReducer(authUser={}, action={}){
    switch(action.type) {
        case actionType.RECEIVE_AUTH_USER :
            return action.payload.authUser;
        case actionType.UNSET_AUTH_USER:
            return action.payload.authUser;
        default:
            return authUser;
    }
}

export default authUserReducer;