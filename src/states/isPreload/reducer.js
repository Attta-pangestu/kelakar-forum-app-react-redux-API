import { actionType } from './action';

function isPreloadReducer(isPreload = true, action = {}) {
	switch (action.type) {
		case actionType.SET_IS_PRELOAD:
			return action.payload.isPreload;
		default:
			return isPreload;
	}
}

export default isPreloadReducer;
