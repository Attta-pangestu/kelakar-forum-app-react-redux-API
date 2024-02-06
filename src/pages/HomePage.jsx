// library
import { useSelector, useDispatch } from 'react-redux';

import ThreadLists from '../components/ThreadLists';

import SideInfo from '../components/sideInfo';
import SideMenu from '../components/Side-Menu';

// action
import asyncPopulateUserAndThread from '../states/shared/action';
import { useEffect } from 'react';
function HomePage() {
	const dispatch = useDispatch();
	const { authUser = {}, leaderBoards = [] } = useSelector((states) => states);

	useEffect(() => {
		dispatch(asyncPopulateUserAndThread());
	}, [dispatch]);

	useEffect(() => {
		console.log('state changed');
	}, [leaderBoards]);

	return (
		<>
			{' '}
			<SideMenu />
			<ThreadLists authUser={authUser} />
			<SideInfo leaderboards={leaderBoards} />
		</>
	);
}

export default HomePage;
