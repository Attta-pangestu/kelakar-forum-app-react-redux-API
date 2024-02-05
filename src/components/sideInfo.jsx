import Categories from './Categories';
import ThreadLeaderBoard from './ThreadLeaderboard';
function SideInfo() {
	return (
		<aside className="col-span-3">
			<Categories />
			<ThreadLeaderBoard />
		</aside>
	);
}

export default SideInfo;
