// library

// icons

// Component
import Navigation from './components/Navigation';
import SideMenu from './components/Side-Menu';
import Thread from './components/Thread';

function App() {
	return (
		<>	
			<div classname="min-h-screen  text-white ">
				<Navigation />
				{/* main content card */}
				<main className="min-h-screen max-w-7xl bg-black relative border-b border-neutral py-8 px-4">
					<SideMenu />
					<Thread />
				</main>
			</div>
		</>
	);
}

export default App;
