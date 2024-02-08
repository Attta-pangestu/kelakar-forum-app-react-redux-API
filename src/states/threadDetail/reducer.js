import { actionType } from './action';

function threadDetailReducer(threadDetail = {}, action = {}) {
	switch (action.type) {
		case actionType.SET_THREAD_DETAIL:
			return action.payload.threadDetail;
		case actionType.LIKE_THREAD_DETAIL:
			return {
				...threadDetail,
				upVotesBy: threadDetail.upVotesBy.includes(action.payload.authUserId)
					? threadDetail.upVotesBy.filter(
							(userId) => userId !== action.payload.authUserId
					  )
					: [...threadDetail.upVotesBy, action.payload.authUserId],
			};
		case actionType.DISLIKE_THREAD_DETAIL:
			return {
				...threadDetail,
				downVotesBy: threadDetail.downVotesBy.includes(
					action.payload.authUserId
				)
					? threadDetail.downVotesBy.filter(
							(userId) => userId !== action.payload.authUserId
					  )
					: [...threadDetail.upVotesBy, action.payload.authUserId],
			};
		default:
			return threadDetail;
	}
}

export default threadDetailReducer;
