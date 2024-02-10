import LoadingBar from 'react-redux-loading-bar';

function Loading() {
	return (
		<div className="absolute top-0 z-50 w-full">
			{/* @TODO: use react-redux-loading-bar to show loading bar */}
			<LoadingBar />
		</div>
	);
}

export default Loading;
