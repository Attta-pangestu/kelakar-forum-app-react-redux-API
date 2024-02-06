import PropTypes from 'prop-types';

import AuthInputCard from '../components/AuthInputCard';

import { useDispatch } from 'react-redux';
import { asyncLoginUser, asyncRegisterUser } from '../states/authUser/action';

function AuthPage({ isRegister }) {
	const dispatch = useDispatch();

	const onLoginHandler = ({ email, password }) => {
		dispatch(asyncLoginUser({ email, password }));
	};

	const onRegisterHandler = ({ name, email, password }) => {
		dispatch(asyncRegisterUser({ name, email, password }));
	};

	return (
		<div className="col-start-3 col-end-11 border border-white w-full pt-16  ">
			<header>
				<span className=" mx-auto text-center block w-20 h-20 border-4 border-white text-7xl font-bold">
					K
				</span>
				<h1 className="uppercase text-3xl font-bold text-center my-4 ">
					Kelakar Forum App Login
				</h1>
			</header>
			{isRegister ? (
				<AuthInputCard isRegister={isRegister} onSubmit={onRegisterHandler} />
			) : (
				<AuthInputCard isRegister={isRegister} onSubmit={onLoginHandler} />
			)}
		</div>
	);
}

AuthPage.propTypes = {
	isRegister: PropTypes.bool.isRequired,
};

export default AuthPage;
