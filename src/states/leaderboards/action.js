import api from '../../utils/api';

const actionType = {
	SET_ALL_LEADERBOARDS: 'SET_ALL_LEADERBOARDS',
};

function setAllLeaderboardsActionCreator(leaderboards) {
	return {
		type: actionType.SET_ALL_LEADERBOARDS,
		payload: {
			leaderboards,
		},
	};
}

function asyncGetAllLeaderboards() {
	return async (dispatch) => {
		try {
			const { leaderboards } = await api.getAllLeaderboards();
			dispatch(setAllLeaderboardsActionCreator(leaderboards));
		} catch (err) {
			console.log(err);
		}
	};
}

export { actionType, setAllLeaderboardsActionCreator, asyncGetAllLeaderboards };
