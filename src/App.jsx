// library
import { Routes, Route, useLocation } from 'react-router-dom';
// pages
import HomePage from './assets/pages/HomePage';
import AuthPage from './assets/pages/AuthPage';
// Component
import Navigation from './components/Navigation';

function App() {
	const location = useLocation();
	const currentPath = location.pathname;
	const noNavigationPages = ['/login', '/register'];

	return (
		<>
			<div className="min-h-screen max-w-full  text-white ">
				{!noNavigationPages.includes(currentPath) && <Navigation />}
				{/* main content card */}
				<main className="min-h-screen w-full max-w-full bg-black relative border-b border-neutral py-8 px-4">
					<div className="grid grid-cols-12 gap-4 text-white">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/login" element={<AuthPage isRegister={false} />} />
							<Route
								path="/register"
								element={<AuthPage isRegister={true} />}
							/>
						</Routes>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
