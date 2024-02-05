function ThreadLeaderBoard() {
	return (
		<div className="border-2 border-neutral-500 rounded-lg p-4 my-4">
			<h2 className="text-2xl font-bold">Kelakar User</h2>
			<ul className=" list-inside my-4 text-xl">
				<li className="flex px-2 justify-between">
					<h3>Username</h3>
					<h3>Thread Count</h3>
				</li>
				<li className="flex py-2 px-2 justify-between">
					<div className="flex gap-2 ">
						<span className="block py-2 ">1.</span>
						<img
							src="https://ui-avatars.com/api/?name=atha&background=random"
							className="w-10 h-10 rounded-full mr-2"
						/>
						<h3 className="block  py-2">Andrea</h3>
					</div>
					<div>
						<span className="block text-xl py-2 px-4">20</span>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default ThreadLeaderBoard;
