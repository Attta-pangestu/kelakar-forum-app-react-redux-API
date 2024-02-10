// library
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ThreadLists from '../components/ThreadLists';

import SideInfo from '../components/sideInfo';
import SideMenu from '../components/Side-Menu';

// action
import asyncPopulateUserAndThread from '../states/shared/action';
import { useEffect, useCallback, useMemo } from 'react';
import {
	asyncAddThread,
	asyncLikeThread,
	asyncDislikeThread,
	likeThreadActionCreator,
	dislikeThreadActionCreator,
} from '../states/threads/action';

function HomePage({ searchVal }) {
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

	const handleApiPostSubmit = useCallback(
		async ({ title, content, hashText }) => {
			await dispatch(
				asyncAddThread({ title, body: content, category: hashText })
			);
		},
		[dispatch]
	);

	const handleLikeThread = useCallback(
		async (threadId) => {
			if (!authUser) {
				alert('Silakan login terlebih dahulu untuk memberi suka pada thread.');
				return;
			}

			const threadById = threads.find((thread) => thread.id === threadId);
			await dispatch(
				asyncLikeThread({ threadId, authUserId: authUser.id, isDetail: false })
			);
			// update and sync UI of Dislike button
			threadById.downVotesBy.includes(authUser.id) &&
				dispatch(dislikeThreadActionCreator(threadId, authUser.id));
		},
		[dispatch, authUser, threads]
	);

	const handleDislikeThread = useCallback(
		async (threadId) => {
			if (!authUser) {
				alert(
					'Silakan login terlebih dahulu untuk memberi tidak suka pada thread.'
				);
				return;
			}

			const threadById = threads.find((thread) => thread.id === threadId);
			await dispatch(
				asyncDislikeThread({
					threadId,
					authUserId: authUser.id,
					isDetail: false,
				})
			);
			// update and sync UI of Dislike button
			threadById.upVotesBy.includes(authUser.id) &&
				dispatch(likeThreadActionCreator(threadId, authUser.id));
		},
		[dispatch, authUser, threads]
	);

	const filterThreads = useMemo(() => {
		return threads.filter(
			(thread) =>
				thread.title.toLowerCase().includes(searchVal.toLowerCase()) ||
				thread.body.toLowerCase().includes(searchVal.toLowerCase()) ||
				thread.category.toLowerCase().includes(searchVal.toLowerCase())
		);
	}, [threads, searchVal]);

	const threadListWithUser = useMemo(() => {
		return filterThreads.map((thread) => {
			return {
				...thread,
				user: allUsers.find((user) => user.id === thread.ownerId),
				authUserId: authUser.id,
			};
		});
	}, [filterThreads, allUsers, authUser.id]);

	const extractCategories = useMemo(() => {
		return [...new Set(threads.map((thread) => thread.category))];
	}, [threads]);

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

HomePage.propTypes = {
	searchVal: PropTypes.string,
};

HomePage.defaultProps = {
	searchVal: '',
};

export default HomePage;
