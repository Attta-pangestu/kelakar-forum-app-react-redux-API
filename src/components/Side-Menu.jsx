import { FaHome, FaRegUser } from 'react-icons/fa';
import { FaRankingStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function SideMenu() {
	const { pathname } = useLocation();
	return (
		<aside className="block col-span-2 sticky top-20 h-fit rounded-md border border-neutral-600 p-4 pb-20 ">
			<ul className="flex flex-col gap-4">
				<li>
					<Link
						to="/profil"
						className={`block p-2  ${
							pathname === '/profil' && 'bg-neutral-600'
						} hover:bg-neutral-600 text-xl rounded-md  `}
					>
						{' '}
						<FaRegUser className="inline" /> Profil{' '}
					</Link>
				</li>
				<li>
					<Link
						to="/"
						className={`block p-2  ${
							pathname === '/' && 'bg-neutral-600'
						} hover:bg-neutral-600 text-xl rounded-md  `}
					>
						{' '}
						<FaHome className="inline" /> Thread{' '}
					</Link>
				</li>
				<li>
					<Link
						to="/leaderboard"
						className={`block p-2  ${
							pathname === '/leaderboard' && 'bg-neutral-600'
						} hover:bg-neutral-600 text-xl rounded-md  `}
					>
						{' '}
						<FaRankingStar className="inline" /> Leaderboard{' '}
					</Link>
				</li>
			</ul>
		</aside>
	);
}

export default SideMenu;
