import { actionType } from './action';

function leaderBoardsReducer(leaderboards = [], action = {}) {
	switch (action.type) {
		case actionType.SET_ALL_LEADERBOARDS:
			return action.payload.leaderboards;
		default:
			return leaderboards;
	}
}

export default leaderBoardsReducer;
