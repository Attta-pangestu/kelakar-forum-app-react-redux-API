import { actionType } from './action';
function allUsersReducer(allUsers = [], action = {}) {
	switch (action.type) {
		case actionType.SET_ALL_USERS:
			return action.payload.allUsers;
		default:
			return allUsers;
	}
}

export default allUsersReducer;
