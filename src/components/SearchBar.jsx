import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useEffect } from 'react';
function SearchBar({ handleSearchBar }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChangeSearchBar = (e) => {
		setSearchParams({ thread: e.target.value });
	};

	return (
		<div className="block col-span-7 py-4 relative">
			<input
				id="search-input"
				type="text"
				className="t-form w-full py-2 px-2 border-0 bg-neutral-600 rounded-md"
				placeholder="Ketik dan tekan enter"
				value={searchParams.get('thread') || ''}
				onChange={handleChangeSearchBar}
				onKeyDown={(e) => e.key === 'Enter' && handleSearchBar(searchVal)}
			/>

			<button
				type="button"
				className="absolute top-7 right-4"
				onClick={() => handleSearchBar()}
			>
				<FaSearch />
			</button>
		</div>
	);
}

SearchBar.propTypes = {
	handleSearchBar: PropTypes.func.isRequired,
};

export default SearchBar;
