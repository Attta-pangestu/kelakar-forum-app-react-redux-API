import { actionType } from './action';

function threadDetailReducer(threadDetail = {}, action = {}) {
	switch (action.type) {
		case actionType.SET_THREAD_DETAIL:
			return action.payload.threadDetail;
		default:
			return threadDetail;
	}
}

export default threadDetailReducer;
