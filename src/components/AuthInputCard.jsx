import AuthInput from './_base_components/AuthInput';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AuthInputCard({ isRegister }) {
	return (
		<div className="flex flex-col items-center justify-center   mx-auto  ">
			<div className="w-full rounded-lg shadow bg-gray-800 border  border-gray-600 max-w-xl mt-8 ">
				<div className="p-6 space-y-4 ">
					<h1 className="text-3xl font-bold leading-tight tracking-tight  text-white">
						{isRegister ? 'Register An Account' : 'Sign in to your account'}
					</h1>
					<form className="md:space-y-6 " action="#">
						{isRegister && (
							<AuthInput label="Username" type="text" placeholder="Your Name" />
						)}
						<AuthInput
							label="Email"
							type="email"
							placeholder="yourmail@mail.com"
						/>
						<AuthInput label="Password" type="password" placeholder="******" />

						<button
							type="submit"
							className="w-full rounded-lg py-2 text-md font-bold  text-white  bg-blue-700 hover:bg-blue-400 border border-gray-500 "
						>
							{isRegister ? 'Sign Up' : 'Sign In'}
						</button>

						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							{isRegister
								? 'Already Have Account'
								: 'Don’t have an account yet?'}
							<Link
								to={isRegister ? '/login' : '/register'}
								className="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>
								{!isRegister ? 'Sign Up' : 'Sign In'}
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

AuthInputCard.propTypes = {
	isRegister: PropTypes.bool.isRequired,
};

export default AuthInputCard;
