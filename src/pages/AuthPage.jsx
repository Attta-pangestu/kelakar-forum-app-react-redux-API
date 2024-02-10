import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import AuthInputCard from '../components/AuthInputCard';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser, asyncLoginUser } from '../states/authUser/action';

function AuthPage({ isRegister }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onRegisterHandler = ({ name, email, password }) => {
		dispatch(asyncRegisterUser({ name, email, password }));
		alert('Berhasil Mendaftar Silahkan Login');
		navigate('/');
	};

	const handleLogin = ({ email, password }) => {
		dispatch(asyncLoginUser({ email, password }));
	};

	return (
		<div className="col-start-3 col-end-11 border border-white w-full min-h-screen pt-16  ">
			<header>
				<span className=" mx-auto text-white text-center block w-20 h-20 border-4 border-white text-7xl font-bold">
					K
				</span>
				<h1 className="uppercase text-3xl font-bold text-center my-4 ">
					Kelakar Forum App Login
				</h1>
			</header>
			{isRegister ? (
				<AuthInputCard isRegister={isRegister} onSubmit={onRegisterHandler} />
			) : (
				<AuthInputCard isRegister={isRegister} onSubmit={handleLogin} />
			)}
		</div>
	);
}

AuthPage.propTypes = {
	isRegister: PropTypes.bool.isRequired,
};

export default AuthPage;
