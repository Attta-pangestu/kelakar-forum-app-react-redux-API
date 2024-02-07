import PropTypes from 'prop-types';
import LeaderboardItem from './_base_components/leaderboardItem';

function ThreadLeaderBoard({ leaderboards }) {
	return (
		<div className="border-2 border-neutral-500 rounded-lg p-2 my-4">
			<h2 className="text-2xl font-bold">Kelakar User</h2>
			<ul className="list-inside my-4 text-xl">
				<li className="flex px-2 justify-between ">
					<p className="text-md">Username</p>
					<p className="text-md">Thread Count</p>
				</li>
				{leaderboards.map((item, index) => (
					// eslint-disable-next-line react/no-unknown-property
					<LeaderboardItem key={item.user.id} index={index} {...item} />
				))}
			</ul>
		</div>
	);
}

const leaderboardShape = {
	user: PropTypes.object.isRequired,
	score: PropTypes.number.isRequired,
};

ThreadLeaderBoard.propTypes = {
	leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)).isRequired,
};

export default ThreadLeaderBoard;
