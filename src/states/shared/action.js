import api from '../../utils/api';

import { hideLoading, showLoading } from 'react-redux-loading-bar';

// action
import { setAllLeaderboardsActionCreator } from '../leaderboards/action';
import { setAllThreadsActionCreator } from '../threads/action';
import { setAllUsersActionCreator } from '../users/action';

function asyncPopulateUserAndThread() {
	return async (dispatch) => {
		dispatch(showLoading());
		try {
			const { users, threads, leaderboards } = await api.getInitialData();
			dispatch(setAllUsersActionCreator(users));
			dispatch(setAllThreadsActionCreator(threads));
			dispatch(setAllLeaderboardsActionCreator(leaderboards));
		} catch (err) {
			console.log(err.message);
		} finally {
			dispatch(hideLoading());
		}
	};
}

export default asyncPopulateUserAndThread;
