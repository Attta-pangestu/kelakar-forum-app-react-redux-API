const actionType = {
	SET_ALL_USERS: 'SET_ALL_USERS',
};

function setAllUsersActionCreator(allUsers) {
	return {
		type: actionType.SET_ALL_USERS,
		payload: {
			allUsers,
		},
	};
}

export { actionType, setAllUsersActionCreator };
