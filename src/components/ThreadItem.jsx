import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// icons
import { SlLike, SlDislike } from 'react-icons/sl';
import { LiaComments } from 'react-icons/lia';

function ThreadItem({
	id,
	title,
	body,
	category,
	upVotesBy,
	downVotesBy,
	totalComments,
	createdAt,
	user,
}) {
	const likeCount = upVotesBy.length;
	const dislikeCount = downVotesBy.length;

	return (
		<article className="bg-neutral-900 rounded-md p-4 shadow-md border-neutral-200  mt-4">
			<div className="flex gap-2">
				<img
					src="https://ui-avatars.com/api/?name=atha&background=random"
					className="w-10 h-10 rounded-full mr-2"
				/>
				<div className="flex flex-col ml-2">
					<span className="font-medium text-sm">{user.name}</span>
					<span className="text-neutral-500 text-xs">{createdAt}</span>

					<div className="pt-4 pl-4 pr-8">
						<Link to={`/detail/${id}`}>
							<h1 className="text-xl font-bold">{title}</h1>
							<hr className="mb-4 mt-2 px-4  border-neutral-500" />
							<div
								className="text-md font-normal overflow-hidden"
								style={{
									display: '-webkit-box',
									WebkitLineClamp: '4',
									WebkitBoxOrient: 'vertical',
									cursor: 'pointer',
								}}
								dangerouslySetInnerHTML={{ __html: body }}
							></div>
						</Link>

						<button className="mt-4 bg-neutral-600 px-2 py-1 rounded-md">
							#{category}
						</button>

						<div className="mt-4 flex gap-4">
							<button>
								{' '}
								<SlLike className="inline mb-1" /> {likeCount}
							</button>
							<button>
								{' '}
								<SlDislike className="inline mb-1" /> {dislikeCount}
							</button>
							<button>
								{' '}
								<LiaComments className="inline mb-1" /> {totalComments}
							</button>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

const userShape = {
	name: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	user: PropTypes.shape(userShape).isRequired,
	upVotesBy: PropTypes.array.isRequired,
	downVotesBy: PropTypes.array.isRequired,
	totalComments: PropTypes.number.isRequired,
};

export default ThreadItem;
