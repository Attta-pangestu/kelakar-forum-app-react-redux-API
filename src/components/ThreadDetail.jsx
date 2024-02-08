import PropTypes from 'prop-types';

/// icons
import { SlLike, SlDislike } from 'react-icons/sl';
import { LiaComments } from 'react-icons/lia';

function ThreadDetail({
	title,
	body,
	category,
	createdAt,
	upVotesBy,
	downVotesBy,
	comments,
	owner,
	authUser,
	handleLike,
	handleDislike,
}) {
	const { name, avatar } = owner;

	return (
		<>
			<div className="flex gap-4 my-8">
				<img src={avatar} alt={name} className="w-24 h-24 rounded-full" />
				<div className="mt-6">
					<h3 className="uppercase text-xl font-medium">{name}</h3>
					<p className="text-lg text-neutral-600">{createdAt}</p>
				</div>
			</div>
			<h1 className="text-5xl font-bold">{title}</h1>
			<button className="mt-4 bg-neutral-600 px-2 py-1 rounded-md">
				#{category}
			</button>
			<hr className="mb-4 mt-8 px-4  border-neutral-500" />
			<div
				className="text-xl font-normal overflow-hidden"
				dangerouslySetInnerHTML={{ __html: body }}
			></div>
			<div className="mt-4 flex gap-8 text-2xl">
				<button onClick={handleLike}>
					{' '}
					<SlLike
						className={`inline mb-1 ${
							upVotesBy.includes(authUser.id) ? 'text-red-500' : ''
						}`}
					/>{' '}
					{upVotesBy.length}
				</button>
				<button onClick={handleDislike}>
					{' '}
					<SlDislike
						className={`inline mb-1 ${
							downVotesBy.includes(authUser.id) ? 'text-red-500' : ''
						}`}
					/>{' '}
					{downVotesBy.length}
				</button>
				<button>
					{' '}
					<LiaComments className="inline mb-1" /> {comments.lenght}
				</button>
			</div>
		</>
	);
}

const userShape = {
	name: PropTypes.string,
	avatar: PropTypes.string,
	id: PropTypes.string,
};

ThreadDetail.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	upVotesBy: PropTypes.array.isRequired,
	downVotesBy: PropTypes.array.isRequired,
	comments: PropTypes.array.isRequired,
	owner: PropTypes.shape(userShape).isRequired,
	authUser: PropTypes.shape(userShape).isRequired,
	handleLike: PropTypes.func.isRequired,
	handleDislike: PropTypes.func.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { userShape };

export default ThreadDetail;
