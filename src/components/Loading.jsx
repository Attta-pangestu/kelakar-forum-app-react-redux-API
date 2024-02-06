import { LoadingBar } from 'react-redux-loading-bar';

const Loading = () => {
	return (
		<div className="fixed top-0 left-0 right-0 z-50">
			<LoadingBar style={{ backgroundColor: 'red', height: '10px' }} />
		</div>
	);
};

export default Loading;
