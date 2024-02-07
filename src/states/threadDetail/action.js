import api from '../../utils/api';

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

function asyncSetThreadDetail(threadId) {
	return async (dispatch) => {
		try {
			const { detailThread } = await api.getDetailThreads(threadId);
			dispatch(setThreadDetailActionCreator(detailThread));
		} catch (err) {
			console.log(err);
		}
	};
}

export { actionType, asyncSetThreadDetail };
