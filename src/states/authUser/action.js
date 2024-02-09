import api from '../../utils/api';

const actionType = {
	SET_AUTH_USER: 'SET_AUTH_USER',
	UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function receiverAuthUserActionCreator(authUser) {
	return {
		type: actionType.SET_AUTH_USER,
		payload: {
			authUser,
		},
	};
}

function asyncUnsetAuthUser() {
	return (dispatch) => {
		api.putAccessToken('');
		dispatch(unsetAuthUserActionCreator());
	};
}

function unsetAuthUserActionCreator() {
	return {
		type: actionType.UNSET_AUTH_USER,
		payload: {
			authUser: null,
		},
	};
}

function asyncReceiveAuthUser({ email, password }) {
	return async (dispatch) => {
		try {
			const { token } = await api.login({ email, password });
			api.putAccessToken(token);
			const { user } = await api.getAuthUsers();
			dispatch(receiverAuthUserActionCreator(user));
		} catch (err) {
			console.log(err.message);
		}
	};
}

function asyncRegisterUser({ name, email, password }) {
	return async () => {
		try {
			await api.register({ name, email, password });
		} catch (err) {
			console.log(err);
		}
	};
}

function asyncLoginUser({ email, password }) {
	return async () => {
		const { token } = await api.login({ email, password });
		api.putAccessToken(token);
		console.log(token);
		alert('Login Success');
	};
}

export {
	actionType,
	receiverAuthUserActionCreator,
	unsetAuthUserActionCreator,
	asyncReceiveAuthUser,
	asyncRegisterUser,
	asyncLoginUser,
	asyncUnsetAuthUser,
};
