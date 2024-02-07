import SideMenu from '../components/Side-Menu';
import { useSelector } from 'react-redux';
function ProfilPage() {
	const { authUser = null } = useSelector((states) => states);
	return (
		<>
			<SideMenu />
			<div
				className="col-span-7 bg-neutral-600 rounded-lg  px-4 border-4 border-neutral-400  relative  "
				style={{
					minHeight: '40vh',
					backgroundImage:
						'url(https://static.vecteezy.com/system/resources/thumbnails/034/822/316/small/empty-space-of-blue-plaster-concrete-wall-grunge-texture-background-photo.jpg)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					width: '100%',
				}}
			>
				<div
					className=" absolute z-30  rounded-lg flex gap-4  align-top justify-start"
					style={{ bottom: '-20%' }}
				>
					<img
						src={authUser.avatar}
						alt="image profil"
						className="w-32 h-32 rounded-full"
					/>
					<div className="mt-6 bg-gray-600 bg-opacity-40 p-4 rounded-lg">
						<h1 className="uppercase">{authUser.name}</h1>
						<p>{authUser.email}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfilPage;
