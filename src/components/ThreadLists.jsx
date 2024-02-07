import Proptypes from 'prop-types';

import ThreadItem from './ThreadItem';
import ThreadInput from './ThreadInput';

function ThreadLists({ authUser, threads, handleApiPostSubmit }) {
	return (
		<section className="col-span-7  ">
			<div>
				<ThreadInput
					authUser={authUser}
					handleApiPostSubmit={handleApiPostSubmit}
				/>

				{threads.map((thread) => (
					<ThreadItem key={thread.id} {...thread} />
				))}
			</div>
		</section>
	);
}

ThreadLists.propTypes = {
	authUser: Proptypes.object,
	threads: Proptypes.array,
	handleApiPostSubmit: Proptypes.func,
};

export default ThreadLists;
