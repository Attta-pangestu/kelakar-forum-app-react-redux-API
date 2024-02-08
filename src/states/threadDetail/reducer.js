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
		case actionType.LIKE_COMMENT_DETAIL:
			return {
				...threadDetail,
				comments: threadDetail.comments.map((comment) => {
					if (comment.id === action.payload.commentId) {
						return {
							...comment,
							upVotesBy: comment.upVotesBy.includes(action.payload.authUserId)
								? comment.upVotesBy.filter(
										(userId) => userId !== action.payload.authUserId
								  )
								: [...comment.upVotesBy, action.payload.authUserId],
						};
					}
					return comment;
				}),
			};

		case actionType.DISLIKE_COMMENT_DETAIL:
			return {
				...threadDetail,
				comments: threadDetail.comments.map((comment) => {
					if (comment.id === action.payload.commentId) {
						return {
							...comment,
							downVotesBy: comment.downVotesBy.includes(
								action.payload.authUserId
							)
								? comment.downVotesBy.filter(
										(userId) => userId !== action.payload.authUserId
								  )
								: [...comment.downVotesBy, action.payload.authUserId],
						};
					}
					return comment;
				}),
			};

		default:
			return threadDetail;
	}
}

export default threadDetailReducer;
