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

export { actionType, setAllLeaderboardsActionCreator };
