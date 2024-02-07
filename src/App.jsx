// library
import { Routes, Route, useLocation } from 'react-router-dom';
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

// action
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
	const dispatch = useDispatch();
	const { isPreload = true } = useSelector((states) => states);
	const location = useLocation();
	const currentPath = location.pathname;
	const noNavigationPages = ['/login', '/register'];

	useEffect(() => {
		dispatch(asyncPreloadProcess());
	}, [dispatch]);

	if (isPreload) {
		return null;
	}

	return (
		<>
			<div className="min-h-screen max-w-full  text-white ">
				<Loading />
				{!noNavigationPages.includes(currentPath) && <Navigation />}

				<main className="min-h-screen w-full max-w-full bg-black relative border-b border-neutral py-8 px-4">
					<div className="grid grid-cols-12 gap-4 text-white">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/login" element={<AuthPage isRegister={false} />} />
							<Route
								path="/register"
								element={<AuthPage isRegister={true} />}
							/>
							<Route path="/leaderboard" element={<LeaderPage />} />
							<Route path="/profil" element={<ProfilPage />} />
							<Route path="/detail/:id" element={<DetailPage />} />
						</Routes>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
