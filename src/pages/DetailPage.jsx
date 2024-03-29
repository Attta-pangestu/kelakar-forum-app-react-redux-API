import { useParams } from 'react-router-dom';
import postedAt from '../utils/postedAt';

import SideMenu from '../components/Side-Menu';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// action
import {
	asyncSetThreadDetail,
	asyncLikeComment,
	asyncDislikeComment,
	asyncPostCommentDetail,
	likeThreadDetailActionCreator,
	dislikeThreadDetailActionCreator,
	likeCommentDetailActionCreator,
	dislikeCommentDetailActionCreator,
} from '../states/threadDetail/action';

import { asyncLikeThread, asyncDislikeThread } from '../states/threads/action';

// component
import ThreadDetail from '../components/ThreadDetail';
import SideUserInfo from '../components/SideUserInfo';
import ThreadComments from '../components/ThreadComments';

function DetailPage() {
	const dispatch = useDispatch();
	const { threadDetail = null, authUser = null } = useSelector(
		(states) => states
	);
	const [isLoading, setIsLoading] = useState(true);

	const { threadId } = useParams();

	const handleLike = async () => {
		try {
			await dispatch(
				asyncLikeThread({ threadId, authUserId: authUser.id, isDetail: true })
			);
			// sync UI state of dislike button
			threadDetail.downVotesBy.includes(authUser.id) &&
				dispatch(dislikeThreadDetailActionCreator(authUser.id));
		} catch (err) {
			console.log(err);
		}
	};

	const handleDislike = async () => {
		try {
			await dispatch(
				asyncDislikeThread({
					threadId,
					authUserId: authUser.id,
					isDetail: true,
				})
			);
			// sync UI state of dislike button
			threadDetail.upVotesBy.includes(authUser.id) &&
				dispatch(likeThreadDetailActionCreator(authUser.id));
		} catch (err) {
			console.log(err);
		}
	};

	const handleLikeComment = async (commentId) => {
		try {
			await dispatch(
				asyncLikeComment({ authUserId: authUser.id, commentId, threadId })
			);
			// sycn UI
			const commentById = threadDetail.comments.find(
				(comment) => comment.id === commentId
			);
			commentById.downVotesBy.includes(authUser.id) &&
				dispatch(dislikeCommentDetailActionCreator(commentId, authUser.id));
		} catch (err) {
			console.log(err);
		}
	};

	const handleDislikeComment = async (commentId) => {
		try {
			await dispatch(
				asyncDislikeComment({ authUserId: authUser.id, commentId, threadId })
			);
			// sycn UI
			const commentById = threadDetail.comments.find(
				(comment) => comment.id === commentId
			);
			commentById.upVotesBy.includes(authUser.id) &&
				dispatch(likeCommentDetailActionCreator(commentId, authUser.id));
		} catch (err) {
			console.log(err);
		}
	};

	const handlePostComment = (content) => {
		dispatch(asyncPostCommentDetail({ content, threadId }));
	};

	useEffect(() => {
		const fetchThreadDetail = async () => {
			await dispatch(asyncSetThreadDetail(threadId));
			setIsLoading(false);
		};
		fetchThreadDetail();
	}, [dispatch, threadId]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	let threadWithAuthUser = {
		...threadDetail,
		createdAt: postedAt(threadDetail.createdAt),
		authUser,
	};
	return (
		<>
			<SideMenu />
			<div className="col-span-7 py-4 px-8 bg-neutral-900 rounded-md  shadow-md border border-neutral-600  mt-4 ">
				<ThreadDetail
					{...threadWithAuthUser}
					handleLike={handleLike}
					handleDislike={handleDislike}
				/>
				<ThreadComments
					{...threadWithAuthUser}
					handlePostComment={handlePostComment}
					handleLikeComment={handleLikeComment}
					handleDislikeComment={handleDislikeComment}
				/>
			</div>
			<SideUserInfo {...authUser} />
		</>
	);
}

export default DetailPage;
