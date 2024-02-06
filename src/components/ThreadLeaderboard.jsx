import PropTypes from 'prop-types';
import LeaderboardItem from './_base_components/leaderboardItem';

function ThreadLeaderBoard({ leaderboards }) {
	return (
		<div className="border-2 border-neutral-500 rounded-lg p-4 my-4">
			<h2 className="text-2xl font-bold">Kelakar User</h2>
			<ul className="list-inside my-4 text-xl">
				<li className="flex px-2 justify-between">
					<h3>Username</h3>
					<h3>Thread Count</h3>
				</li>
				{leaderboards.map((item, index) => (
					// Menggunakan destructuring dalam menyusun props untuk komponen leaderboardItem
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
