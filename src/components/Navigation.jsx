import { useState } from 'react';
import {
	FaArrowLeft,
	FaBookmark,
	FaHome,
	FaMoon,
	FaSearch,
} from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { FaRankingStar } from 'react-icons/fa6';

// base component
import ButtonMenu from './_base_components/Button_menu';

function Navigation() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	return (
		<>
			<nav className=" w-full px-3 relative z-10 shadow-sm bg-black border-b border-neutral-900 text-white justify-end">
				<div className="max-w-7xl grid grid-cols-12 gap-4 items-center">
					{/* brand menu */}
					<div className="col-span-2 flex">
						<button
							type="button"
							className="text-xl p-4 "
							onClick={() => {
								isSideMenuOpen
									? setIsSideMenuOpen(false)
									: setIsSideMenuOpen(true);
							}}
						>
							<RiMenu2Line />
						</button>
						{/* brand name */}
						<Link to="/" title="Forum Kelakar" className="py-4 px-4 ">
							<span className="block w-8 h-8 text-center border-2 border-white font-bold text-xl ">
								K
							</span>
						</Link>
					</div>
					{/* search-bar */}
					<div className=" block col-span-7 py-4 relative ">
						<form>
							<input
								id="search-input"
								type="text"
								className="t-form w-full py-2 px-2 border-0 bg-neutral-600 rounded-md  "
								placeholder="Type and hit enter"
							/>
						</form>
						<button type="button" className="absolute top-7 right-4">
							<FaSearch />
						</button>
					</div>

					<div className="col-span-3 flex justify-end ">
						<ButtonMenu>
							<FaSearch />{' '}
						</ButtonMenu>
						<ButtonMenu>
							<FaBookmark />{' '}
						</ButtonMenu>
						<ButtonMenu>
							<p>EN</p>{' '}
						</ButtonMenu>
						<ButtonMenu>
							<FaMoon />{' '}
						</ButtonMenu>
						<ButtonMenu>
							<p>Login</p>{' '}
						</ButtonMenu>
					</div>
				</div>

				{/* sidebar */}
				<div
					id="fixed-side-menu"
					className={`${
						isSideMenuOpen ? 'block' : 'hidden'
					} w-80 fixed top-0 h-screen bg-black p-4 shadow-lg border-r border-neutral-600`}
				>
					<button
						id="btn-cllose-side-menu"
						type="button"
						className="py-4"
						onClick={() => setIsSideMenuOpen(false)}
					>
						<FaArrowLeft />
					</button>
					<ul className="flex flex-col gap-y-3">
						<li>
							<Link
								to="/"
								className=" p-2 ml-2 block  hover:bg-neutral-600 rounded-md bg-neutral-900"
							>
								<FaHome className="mb-1 mr-2  inline text-2xl" /> Home
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className=" p-2 ml-2 block  hover:bg-neutral-600 rounded-md bg-neutral-900"
							>
								<FaRankingStar className="mb-1 mr-2  inline text-2xl" />{' '}
								Leaderboard
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
