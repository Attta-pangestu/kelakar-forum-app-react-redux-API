import api from '../../utils/api';
import {
	likeThreadDetailActionCreator,
	dislikeThreadDetailActionCreator,
} from '../threadDetail/action';

const actionType = {
	SET_THREADS: 'SET_THREADS',
	ADD_THREAD: 'ADD_THREAD',
	LIKE_THREAD: 'LIKE_THREAD',
	DISLIKE_THREAD: 'DISLIKE_THREAD',
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

function likeThreadActionCreator(threadId, authUserId) {
	return {
		type: actionType.LIKE_THREAD,
		payload: {
			threadId,
			authUserId,
		},
	};
}

function dislikeThreadActionCreator(threadId, authUserId) {
	return {
		type: actionType.DISLIKE_THREAD,
		payload: {
			threadId,
			authUserId,
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

function asyncLikeThread({ threadId, authUserId, isDetail }) {
	return async (dispatch) => {
		console.log('Call asyncLikeThread');
		try {
			if (isDetail) {
				dispatch(likeThreadDetailActionCreator(authUserId));
			} else {
				dispatch(likeThreadActionCreator(threadId, authUserId));
			}
			await api.upVoteThread(threadId);
		} catch (err) {
			if (threadId === null) {
				dispatch(likeThreadDetailActionCreator(authUserId));
			} else {
				dispatch(likeThreadActionCreator(threadId, authUserId));
			}
			console.log(err);
		}
	};
}

function asyncDislikeThread({ threadId, authUserId, isDetail }) {
	return async (dispatch) => {
		try {
			if (isDetail) {
				dispatch(dislikeThreadDetailActionCreator(authUserId));
			} else {
				dispatch(dislikeThreadActionCreator(threadId, authUserId));
			}
			await api.downVoteThread(threadId);
		} catch (err) {
			if (threadId === null) {
				dispatch(dislikeThreadDetailActionCreator(authUserId));
			} else {
				dispatch(dislikeThreadActionCreator(threadId, authUserId));
			}
			console.log(err);
		}
	};
}

export {
	actionType,
	setAllThreadsActionCreator,
	asyncAddThread,
	asyncLikeThread,
	asyncDislikeThread,
	likeThreadActionCreator,
	dislikeThreadActionCreator,
};
