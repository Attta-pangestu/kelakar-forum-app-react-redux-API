import PropTypes from 'prop-types';

function AuthInput({ type, label, placeholder }) {
	return (
		<div>
			<label
				htmlFor={type}
				className="block mb-2 text-xl font-medium  text-white"
			>
				{label}
			</label>
			<input
				type={type}
				name={type}
				id={type}
				className=" border  text-gray-300  rounded-lg focus:ring-2  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 "
				placeholder={placeholder}
			/>
		</div>
	);
}

AuthInput.propTypes = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default AuthInput;
