import ThreadLists from '../../components/ThreadLists';

import SideInfo from '../../components/sideInfo';
import SideMenu from '../../components/Side-Menu';

function HomePage() {
	return (
		<>
			{' '}
			<SideMenu />
			<ThreadLists />
			<SideInfo />
		</>
	);
}
export default HomePage;
