import { configureStore } from '@reduxjs/toolkit';
// loading
import { loadingBarReducer } from 'react-redux-loading-bar';

// reducer
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import allUsersReducer from './users/reducer';
import leaderBoardsReducer from './leaderboards/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
	reducer: {
		authUser: authUserReducer,
		isPreload: isPreloadReducer,
		loadingBar: loadingBarReducer,
		allUsers: allUsersReducer,
		leaderBoards: leaderBoardsReducer,
		threads: threadsReducer,
		threadDetail: threadDetailReducer,
	},
});

export default store;
