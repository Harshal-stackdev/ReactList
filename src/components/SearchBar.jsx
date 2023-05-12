/**
 * Search Bar Component
 */

import { useDispatch } from 'react-redux';
import { filterItems } from '../store/actions';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        dispatch(filterItems(searchTerm));
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchBar;
