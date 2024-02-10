import PropTypes from 'prop-types';
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
import { useSelector } from 'react-redux';

import { FaRankingStar } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
// base component
import ButtonMenu from './_base_components/Button_menu';
import SearchBar from './SearchBar';

function Navigation({ handleSearchBar, handleLogout }) {
	const { authUser = null } = useSelector((states) => states);
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

					<SearchBar handleSearchBar={handleSearchBar} />

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
						{authUser === null ? (
							<Link to="/login">
								<ButtonMenu>
									<p>Login</p>{' '}
								</ButtonMenu>
							</Link>
						) : (
							<button
								onClick={handleLogout}
								className="flex justify-center align-middle items-center gap-2 text-2xl bg-neutral-700 px-4 py-1 rounded-md"
							>
								<FiLogOut /> {authUser.name}
							</button>
						)}
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

Navigation.propTypes = {
	handleSearchBar: PropTypes.func.isRequired,
	handleLogout: PropTypes.func.isRequired,
};

export default Navigation;
