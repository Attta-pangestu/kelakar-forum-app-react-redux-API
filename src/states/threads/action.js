const actionType = {
	SET_THREADS: 'SET_THREADS',
};

function setAllThreadsActionCreator(threads) {
	return {
		type: actionType.SET_THREADS,
		payload: {
			threads,
		},
	};
}

export { actionType, setAllThreadsActionCreator };
