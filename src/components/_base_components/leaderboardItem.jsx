import PropTypes from 'prop-types';

// Komponen leaderboardItem dipecah untuk destructuring
function LeaderboardItem({ user, score, index }) {
	const { avatar, name } = user; // Destructuring objek user

	return (
		<li className="flex py-2 px-2 justify-between">
			<div className="flex gap-2 ">
				{/* Menggunakan nilai index langsung */}
				<span className="block py-2 ">{index + 1}.</span>
				<img
					src={avatar}
					className="w-10 h-10 rounded-full mr-2"
					title={name}
				/>
				<h3 className="block  py-2 capitalize text-md">{name}</h3>
			</div>
			<div>
				<span className="block text-md py-2 px-4">{score}</span>
			</div>
		</li>
	);
}

const userShape = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

LeaderboardItem.propTypes = {
	user: PropTypes.shape(userShape).isRequired,
	score: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
};

export default LeaderboardItem;
