import PropTypes from 'prop-types';

function SideUserInfo({ avatar, name, id }) {
	return (
		<div className="col-span-3 p-4">
			<div className=" py-12 flex flex-col gap-2 justify-center items-center shadow-lg bg-neutral-900 rounded-md   border border-neutral-600">
				<img src={avatar} alt={name} className="w-24 h-24 rounded-full" />
				<span className="text-2xl font-bold uppercase">{name}</span>
				<p>{id}</p>
			</div>
		</div>
	);
}

SideUserInfo.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
};

export default SideUserInfo;
