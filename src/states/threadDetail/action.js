const actionType = {
	SET_THREAD_DETAIL: 'SET_THREAD_DETAIL',
};

function setThreadDetailActionCreator(threadDetail) {
	return {
		type: actionType.SET_THREAD_DETAIL,
		payload: {
			threadDetail,
		},
	};
}

export { actionType, setThreadDetailActionCreator };
