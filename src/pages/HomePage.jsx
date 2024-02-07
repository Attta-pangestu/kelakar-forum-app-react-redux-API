// library
import { useSelector, useDispatch } from 'react-redux';

import ThreadLists from '../components/ThreadLists';

import SideInfo from '../components/sideInfo';
import SideMenu from '../components/Side-Menu';

// action
import asyncPopulateUserAndThread from '../states/shared/action';
import { useEffect } from 'react';
import { asyncAddThread } from '../states/threads/action';
function HomePage() {
	const dispatch = useDispatch();
	const {
		authUser = {},
		leaderBoards = [],
		threads = [],
		allUsers = [],
	} = useSelector((states) => states);

	useEffect(() => {
		dispatch(asyncPopulateUserAndThread());
	}, [dispatch]);

	const handleApiPostSubmit = async ({ title, content, hashText }) => {
		await dispatch(
			asyncAddThread({ title, body: content, category: hashText })
		);
	};

	const threadListWithUser = threads.map((thread) => {
		return {
			...thread,
			user: allUsers.find((user) => user.id === thread.ownerId),
		};
	});

	const extractCategories = [
		...new Set(threads.map((thread) => thread.category)),
	];

	return (
		<>
			{' '}
			<SideMenu />
			<ThreadLists
				threads={threadListWithUser}
				authUser={authUser}
				handleApiPostSubmit={handleApiPostSubmit}
			/>
			<SideInfo leaderboards={leaderBoards} categories={extractCategories} />
		</>
	);
}

export default HomePage;
