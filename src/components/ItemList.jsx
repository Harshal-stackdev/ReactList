/**
 * Component to Display Item List
 */

import { useSelector } from 'react-redux';

const ItemList = () => {
    const filteredItems = useSelector((state) => state.filteredItems);
    const items = useSelector((state) => state.items);

    const displayItems = filteredItems.length > 0 ? filteredItems : items;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Item List</h2>
            <div className="grid grid-cols-1 gap-2">
                {displayItems.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
