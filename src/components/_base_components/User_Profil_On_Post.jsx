import PropTypes from 'prop-types';

function UserProfilePost({ authUser }) {
	const { name, avatar } = authUser;
	return (
		<>
			<div className="mb-4 flex gap-2 ml-2">
				<img
					src={avatar}
					className="w-12 h-12 rounded-full  border-4 border-blue-500"
				/>
				<div>
					<p className="font-bold uppercase">{name}</p>
					<p className="text-sm">@{name}</p>
				</div>
			</div>
		</>
	);
}

UserProfilePost.propTypes = {
	authUser: PropTypes.object.isRequired,
};

export default UserProfilePost;
