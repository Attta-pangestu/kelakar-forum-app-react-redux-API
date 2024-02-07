import Proptypes from 'prop-types';

// base component
import UserProfilePost from './_base_components/User_Profil_On_Post';
import InputPost from './_base_components/InputPost';

// action

function ThreadInput({ authUser, handleApiPostSubmit }) {
	return (
		<div className="mt-2 bg-neutral-900 p-4 rounded-lg">
			<UserProfilePost authUser={authUser} />
			<InputPost handleApiPostSubmit={handleApiPostSubmit} />
		</div>
	);
}

ThreadInput.propTypes = {
	authUser: Proptypes.object.isRequired,
	handleApiPostSubmit: Proptypes.func.isRequired,
};

export default ThreadInput;
