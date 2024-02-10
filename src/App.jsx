// library
import {
	Routes,
	Route,
	useLocation,
	useSearchParams,
	useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// pages
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import LeaderPage from './pages/LeaderPage';
import ProfilPage from './pages/ProfilPage';
import DetailPage from './pages/DetailPage';

// Component
import Navigation from './components/Navigation';
import { useEffect } from 'react';
import Loading from './components/Loading';
import LoadingBar from 'react-redux-loading-bar';

// action
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
	const [searchParams] = useSearchParams();
	const searchVal = searchParams.get('thread');
	const dispatch = useDispatch();
	const { isPreload = true, authUser = null } = useSelector((states) => states);
	const location = useLocation();
	const currentPath = location.pathname;
	const noNavigationPages = ['/login', '/register'];

	useEffect(() => {
		dispatch(asyncPreloadProcess());
	}, [dispatch]);

	if (isPreload) {
		return null;
	}

	const handleSearchBar = (searchVal) => {
		console.log(searchVal);
	};

	const handleLogout = () => {
		dispatch(asyncUnsetAuthUser());
	};

	if (authUser === null) {
		return (
			<>
				<LoadingBar />
				<Routes>
					<Route path="/*" element={<AuthPage isRegister={false} />} />
					<Route path="/register" element={<AuthPage isRegister={true} />} />
				</Routes>
			</>
		);
	}

	return (
		<>
			<Loading />
			{/* <LoadingBar /> */}
			<div className="min-h-screen max-w-full  text-white ">
				{authUser && !noNavigationPages.includes(currentPath) && (
					<Navigation
						handleSearchBar={handleSearchBar}
						handleLogout={handleLogout}
					/>
				)}

				<main className="min-h-screen w-full max-w-full bg-black relative border-b border-neutral py-8 px-4">
					<div className="grid grid-cols-12 gap-4 text-white">
						{searchVal ? (
							<HomePage searchVal={searchVal} />
						) : (
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/home" element={<HomePage />} />
								<Route path="/leaderboard" element={<LeaderPage />} />
								<Route path="/profil" element={<ProfilPage />} />
								<Route path="/detail/:threadId" element={<DetailPage />} />
							</Routes>
						)}
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
