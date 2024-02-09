import { actionType } from './action';


function threadsReducer(threads = [], action = {}) {
	switch (action.type) {
		case actionType.SET_THREADS:
			return action.payload.threads;
		case actionType.ADD_THREAD:
			return threads.concat(action.payload.thread);
		case actionType.LIKE_THREAD:
			if (threads) {
				return threads.map((threads) => {
					if (threads.id === action.payload.threadId) {
						return {
							...threads,
							upVotesBy: threads.upVotesBy.includes(action.payload.authUserId)
								? threads.upVotesBy.filter(
										(userId) => userId !== action.payload.authUserId
								  )
								: [...threads.upVotesBy, action.payload.authUserId],
						};
					}
					return threads;
				});
			}
			return;

		case actionType.DISLIKE_THREAD:
			return threads.map((threads) => {
				if (threads.id === action.payload.threadId) {
					return {
						...threads,
						downVotesBy: threads.downVotesBy.includes(action.payload.authUserId)
							? threads.downVotesBy.filter(
									(userId) => userId !== action.payload.authUserId
							  )
							: [...threads.downVotesBy, action.payload.authUserId],
					};
				}
				return threads;
			});
		default:
			return threads;
	}
}

export default threadsReducer;
