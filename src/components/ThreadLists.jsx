import Proptypes from 'prop-types';

import ThreadItem from './ThreadItem';
import ThreadInput from './ThreadInput';

function ThreadLists({ authUser }) {
	return (
		<section className="col-span-7  ">
			<div>
				<ThreadInput authUser={authUser} />
				<ThreadItem />
				<ThreadItem />
			</div>
		</section>
	);
}

ThreadLists.propTypes = {
	authUser: Proptypes.object,
};

export default ThreadLists;
