// library
import { useSelector, useDispatch } from 'react-redux';

import ThreadLists from '../components/ThreadLists';

import SideInfo from '../components/sideInfo';
import SideMenu from '../components/Side-Menu';

// action
import asyncPopulateUserAndThread from '../states/shared/action';
import { useEffect } from 'react';
import {
	asyncAddThread,
	asyncLikeThread,
	asyncDislikeThread,
	likeThreadActionCreator,
	dislikeThreadActionCreator,
} from '../states/threads/action';

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

	const handleLikeThread = async (threadId) => {
		const threadById = threads.find((thread) => thread.id === threadId);
		await dispatch(
			asyncLikeThread({ threadId, authUserId: authUser.id, isDetail: false })
		);
		// update and sync UI of Dislike button
		threadById.downVotesBy.includes(authUser.id) &&
			dispatch(dislikeThreadActionCreator(threadId, authUser.id));
	};

	const handleDislikeThread = async (threadId) => {
		const threadById = threads.find((thread) => thread.id === threadId);
		await dispatch(
			asyncDislikeThread({ threadId, authUserId: authUser.id, isDetail: false })
		);
		// update and sync UI of Dislike button
		threadById.upVotesBy.includes(authUser.id) &&
			dispatch(likeThreadActionCreator(threadId, authUser.id));
	};

	const threadListWithUser = threads.map((thread) => {
		return {
			...thread,
			user: allUsers.find((user) => user.id === thread.ownerId),
			authUserId: authUser.id,
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
				handleLikeThread={handleLikeThread}
				handleDislikeThread={handleDislikeThread}
			/>
			<SideInfo leaderboards={leaderBoards} categories={extractCategories} />
		</>
	);
}

export default HomePage;
