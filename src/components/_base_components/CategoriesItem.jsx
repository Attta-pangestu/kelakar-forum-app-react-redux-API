// eslint-disable-next-line react/prop-types
function CategoriesItem({ categori }) {
	return (
		<li>
			<button
				type="button"
				className=" my-4 py-1 px-2 bg-neutral-600 rounded-md"
			>
				#{categori}
			</button>
		</li>
	);
}

export default CategoriesItem;
