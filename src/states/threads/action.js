import api from '../../utils/api';

const actionType = {
	SET_THREADS: 'SET_THREADS',
	ADD_THREAD: 'ADD_THREAD',
};

function setAllThreadsActionCreator(threads) {
	return {
		type: actionType.SET_THREADS,
		payload: {
			threads,
		},
	};
}

function addThreadActionCreator(thread) {
	return {
		type: actionType.ADD_THREAD,
		payload: {
			thread,
		},
	};
}

function asyncAddThread({ title, body, category }) {
	return async (dispatch) => {
		try {
			const { thread } = await api.postThread({ title, body, category });
			dispatch(addThreadActionCreator(thread));
			return thread;
		} catch (err) {
			console.log(err);
		}
	};
}

export { actionType, setAllThreadsActionCreator, asyncAddThread };
