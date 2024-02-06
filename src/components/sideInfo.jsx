import PropTypes from 'prop-types';

import Categories from './Categories';
import ThreadLeaderBoard from './ThreadLeaderboard';
function SideInfo({ leaderboards }) {
	console.log(leaderboards);
	return (
		<aside className="col-span-3">
			<Categories />
			<ThreadLeaderBoard leaderboards={leaderboards} />
		</aside>
	);
}

SideInfo.propTypes = {
	leaderboards: PropTypes.array.isRequired,
};

export default SideInfo;
