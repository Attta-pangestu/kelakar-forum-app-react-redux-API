import { FaHome } from 'react-icons/fa';
import { FaRankingStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function SideMenu() {
	return (
		<aside className="block col-span-2 sticky top-20 h-24 ">
			<ul className="flex flex-col gap-4">
				<li>
					<Link
						to="/"
						className="block p-2 hover:bg-neutral-600 bg-neutral-900 text-xl rounded-md  "
					>
						{' '}
						<FaHome className="inline" /> Thread{' '}
					</Link>
				</li>
				<li>
					<Link
						to="/"
						className="block p-2 hover:bg-neutral-600 bg-neutral-900 text-xl rounded-md  "
					>
						{' '}
						<FaRankingStar className="inline" /> Viral Thread{' '}
					</Link>
				</li>
			</ul>
		</aside>
	);
}

export default SideMenu;
