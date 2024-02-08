import Proptypes from 'prop-types';

import ThreadItem from './ThreadItem';
import ThreadInput from './ThreadInput';

function ThreadLists({
	authUser,
	threads,
	handleApiPostSubmit,
	handleLikeThread,
	handleDislikeThread,
}) {
	return (
		<section className="col-span-7  ">
			<div>
				<ThreadInput
					authUser={authUser}
					handleApiPostSubmit={handleApiPostSubmit}
				/>

				{threads.map((thread) => (
					<ThreadItem
						key={thread.id}
						{...thread}
						handleLikeThread={handleLikeThread}
						handleDislikeThread={handleDislikeThread}
					/>
				))}
			</div>
		</section>
	);
}

ThreadLists.propTypes = {
	authUser: Proptypes.object,
	threads: Proptypes.array,
	handleApiPostSubmit: Proptypes.func,
	handleLikeThread: Proptypes.func,
	handleDislikeThread: Proptypes.func,
};

export default ThreadLists;
