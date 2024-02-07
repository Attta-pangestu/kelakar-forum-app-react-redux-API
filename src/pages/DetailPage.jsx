import { useParams } from 'react-router-dom';
import SideMenu from '../components/Side-Menu';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncSetThreadDetail } from '../states/threadDetail/action';
function DetailPage() {
	const dispatch = useDispatch();
	const { threadDetail = {} } = useSelector((states) => states);
	const { id } = useParams();

	useEffect(() => {
		dispatch(asyncSetThreadDetail(id));
	}, [dispatch, id]);

	return (
		<>
			<SideMenu />
			<div className="col-span-7"></div>
		</>
	);
}

export default DetailPage;
