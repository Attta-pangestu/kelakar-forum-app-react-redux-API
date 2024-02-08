import PropTypes from 'prop-types';

import Categories from './Categories';
import ThreadLeaderBoard from './ThreadLeaderboard';
function SideInfo({ leaderboards, categories }) {
	return (
		<aside className="col-span-3">
			<Categories categories={categories} />
			<ThreadLeaderBoard leaderboards={leaderboards} />
		</aside>
	);
}

SideInfo.propTypes = {
	leaderboards: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
};

export default SideInfo;
