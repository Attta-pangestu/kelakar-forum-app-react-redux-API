import SideMenu from '../components/Side-Menu';
import ThreadLeaderBoard from '../components/ThreadLeaderboard';
import { useSelector } from 'react-redux';

function LeaderPage() {
	const { leaderBoards = [] } = useSelector((states) => states);

	return (
		<>
			<SideMenu />
			<div className="col-span-9  ">
				<ThreadLeaderBoard leaderboards={leaderBoards} />
			</div>
		</>
	);
}

export default LeaderPage;
