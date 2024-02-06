import api from '../../utils/api';
import { receiverAuthUserActionCreator } from '../authUser/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const actionType = {
	SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
	return {
		type: actionType.SET_IS_PRELOAD,
		payload: {
			isPreload,
		},
	};
}

function asyncPreloadProcess() {
	return async (dispatch) => {
		dispatch(showLoading());
		try {
			const { user } = await api.getAuthUsers();
			dispatch(receiverAuthUserActionCreator(user));
		} catch (err) {
			console.log(err.message);
			dispatch(receiverAuthUserActionCreator(null));
		} finally {
			dispatch(setIsPreloadActionCreator(false));
		}
		dispatch(hideLoading());
	};
}

export { actionType, setIsPreloadActionCreator, asyncPreloadProcess };
