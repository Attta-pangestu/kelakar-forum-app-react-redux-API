function ButtonMenu({ children }) {
	return (
		<button
			type="button"
			title="search"
			className="w-8 h-8 rounded-full bg-neutral-900 flex justify-center mr-2 items-center"
		>
			{children}
		</button>
	);
}

export default ButtonMenu;
