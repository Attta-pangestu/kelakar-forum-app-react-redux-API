// base component
import UserProfilePost from './_base_components/User_Profil_On_Post';
import InputPost from './_base_components/InputPost';

function ThreadInput() {
	return (
		<div className="mt-2 bg-neutral-900 p-4 rounded-lg">
			<UserProfilePost />
			<InputPost />
		</div>
	);
}

export default ThreadInput;
