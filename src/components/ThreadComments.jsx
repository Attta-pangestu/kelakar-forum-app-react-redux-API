import PropTypes from 'prop-types';
import { userShape } from './ThreadDetail';

import InputWithTextEditor from './_base_components/InputWithTextEditor';
import { useState } from 'react';

import { SlLike, SlDislike } from 'react-icons/sl';

function ThreadComments({
	authUser,
	comments,
	handlePostComment,
	handleLikeComment,
	handleDislikeComment,
}) {
	const [comment, setComment] = useState('');

	const { name: authName, avatar: authAvatar } = authUser;

	const handleComment = (value) => {
		setComment(value);
	};

	return (
		<>
			<h2 className="text-2xl font-bold my-6">{comments.lenght} Komentar</h2>
			<div className="bg-neutral-900 p-6 my-6 flex gap-4 rounded-md  shadow-md border border-neutral-600 ">
				<img
					src={authAvatar}
					alt={authName}
					className="w-12 h-12  rounded-full"
				/>
				<form className="w-full">
					<InputWithTextEditor onChange={handleComment} value={comment} />
					<button
						type="submit"
						className=" mt-4 py-2 px-6 bg-blue-700 hover:bg-blue-500 text-white text-xl font-bold rounded-lg"
						onClick={handlePostComment}
					>
						Comment
					</button>
				</form>
			</div>

			{comments.map((comment) => (
				<div
					key={comment.id}
					className="bg-neutral-900 my-4 p-6  gap-4 rounded-md  shadow-md border border-neutral-600"
				>
					<div className="flex gap-4">
						<img
							src={comment.owner.avatar}
							alt={comment.owner.name}
							className="w-12 h-12  rounded-full"
						/>
						<div
							className="font-medium text-lg "
							dangerouslySetInnerHTML={{ __html: comment.content }}
						></div>
					</div>

					<div className="mt-4  flex gap-4 text-lg">
						<button onClick={() => handleLikeComment(comment.id)}>
							{' '}
							<SlLike className="inline mb-1" /> {comment.upVotesBy.length}
						</button>
						<button onClick={() => handleDislikeComment(comment.id)}>
							{' '}
							<SlDislike className="inline mb-1" /> {comment.downVotesBy.length}
						</button>
					</div>
				</div>
			))}
		</>
	);
}

ThreadComments.propTypes = {
	authUser: PropTypes.shape(userShape).isRequired,
	comments: PropTypes.array.isRequired,
	handlePostComment: PropTypes.func.isRequired,
	handleLikeComment: PropTypes.func.isRequired,
	handleDislikeComment: PropTypes.func.isRequired,
};

export default ThreadComments;
