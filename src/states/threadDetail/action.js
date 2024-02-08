import api from '../../utils/api';

const actionType = {
	SET_THREAD_DETAIL: 'SET_THREAD_DETAIL',
	LIKE_THREAD_DETAIL: 'LIKE_THREAD_DETAIL',
	DISLIKE_THREAD_DETAIL: 'DISLIKE_THREAD_DETAIL',
	LIKE_COMMENT_DETAIL: 'LIKE_COMMENT_DETAIL',
	DISLIKE_COMMENT_DETAIL: 'DISLIKE_COMMENT_DETAIL',
};

function setThreadDetailActionCreator(threadDetail) {
	return {
		type: actionType.SET_THREAD_DETAIL,
		payload: {
			threadDetail,
		},
	};
}

function likeThreadDetailActionCreator(authUserId) {
	return {
		type: actionType.LIKE_THREAD_DETAIL,
		payload: {
			authUserId,
		},
	};
}

function dislikeThreadDetailActionCreator(authUserId) {
	return {
		type: actionType.DISLIKE_THREAD_DETAIL,
		payload: {
			authUserId,
		},
	};
}

function likeCommentDetailActionCreator(commentId, authUserId) {
	return {
		type: actionType.LIKE_COMMENT_DETAIL,
		payload: {
			commentId,
			authUserId,
		},
	};
}

function dislikeCommentDetailActionCreator(commentId, authUserId) {
	return {
		type: actionType.DISLIKE_COMMENT_DETAIL,
		payload: {
			commentId,
			authUserId,
		},
	};
}

function asyncSetThreadDetail(threadId) {
	return async (dispatch) => {
		try {
			dispatch(setThreadDetailActionCreator(null));
			const { detailThread } = await api.getDetailThreads(threadId);
			dispatch(setThreadDetailActionCreator(detailThread));
		} catch (err) {
			console.log(err);
			dispatch(setThreadDetailActionCreator(null));
		}
	};
}

export {
	actionType,
	asyncSetThreadDetail,
	likeThreadDetailActionCreator,
	dislikeThreadDetailActionCreator,
	likeCommentDetailActionCreator,
	dislikeCommentDetailActionCreator,
};
