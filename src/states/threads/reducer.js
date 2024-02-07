import { actionType } from './action';

function threadsReducer(threads = [], action = {}) {
	switch (action.type) {
		case actionType.SET_THREADS:
			return action.payload.threads;
		case actionType.ADD_THREAD:
			return threads.concat(action.payload.thread);
		default:
			return threads;
	}
}

export default threadsReducer;
