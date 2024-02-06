import { actionType } from './action';

function threadsReducer(threads = [], action = {}) {
	switch (action.type) {
		case actionType.SET_THREADS:
			return action.payload.threads;
		default:
			return threads;
	}
}

export default threadsReducer;
