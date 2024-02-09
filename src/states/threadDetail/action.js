import { comment } from 'postcss';
import api from '../../utils/api';

const actionType = {
	SET_THREAD_DETAIL: 'SET_THREAD_DETAIL',
	LIKE_THREAD_DETAIL: 'LIKE_THREAD_DETAIL',
	DISLIKE_THREAD_DETAIL: 'DISLIKE_THREAD_DETAIL',
	LIKE_COMMENT_DETAIL: 'LIKE_COMMENT_DETAIL',
	DISLIKE_COMMENT_DETAIL: 'DISLIKE_COMMENT_DETAIL',
	POST_COMMENT_DETAIL: 'POST_COMMENT_DETAIL',
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

function postCommentDetailActionCreator(comment) {
	return {
		type: actionType.POST_COMMENT_DETAIL,
		payload: {
			comment,
		},
	};
}

function asyncPostCommentDetail({ threadId, content }) {
	return async (dispatch) => {
		try {
			const { comment } = await api.postComment({ content, threadId });
			dispatch(postCommentDetailActionCreator(comment));
		} catch (err) {
			console.log(err);
		}
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

function asyncLikeComment({ threadId, commentId, authUserId }) {
	return async (dispatch) => {
		try {
			dispatch(likeCommentDetailActionCreator(commentId, authUserId));
			await api.upVoteComment({ threadId, commentId });
		} catch (err) {
			dispatch(likeCommentDetailActionCreator(commentId, authUserId));
			console.log(err);
		}
	};
}

function asyncDislikeComment({ threadId, commentId, authUserId }) {
	return async (dispatch) => {
		try {
			dispatch(dislikeCommentDetailActionCreator(commentId, authUserId));
			await api.downVoteComment({ threadId, commentId });
		} catch (err) {
			dispatch(dislikeCommentDetailActionCreator(commentId, authUserId));
			console.log(err);
		}
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

function asyncLikeThreadDetail(threadId, authUserId) {
	return async (dispatch) => {
		try {
			dispatch(likeThreadDetailActionCreator(authUserId));
			await api.upVoteThread(threadId);
		} catch (err) {
			dispatch(likeThreadDetailActionCreator(authUserId));
			console.log(err);
		}
	};
}

function asyncDislikeThreadDetail(threadId, authUserId) {
	return async (dispatch) => {
		try {
			dispatch(dislikeThreadDetailActionCreator(authUserId));
			await api.downVoteThread(threadId);
		} catch (err) {
			dispatch(dislikeThreadDetailActionCreator(authUserId));
			console.log(err);
		}
	};
}

export {
	actionType,
	asyncSetThreadDetail,
	asyncLikeThreadDetail,
	asyncDislikeThreadDetail,
	asyncLikeComment,
	asyncDislikeComment,
	asyncPostCommentDetail,
	likeThreadDetailActionCreator,
	dislikeThreadDetailActionCreator,
	likeCommentDetailActionCreator,
	dislikeCommentDetailActionCreator,
};
