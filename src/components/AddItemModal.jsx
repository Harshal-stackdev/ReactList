/**
 * Modal Component to Add Items
 */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions';

/**
 * Modal component for adding items
 * @param {Object} props - Component props
 * @param {Function} props.closeModal - Function to close the modal
 * @returns {JSX.Element} Modal component
 */
const AddItemModal = ({ closeModal }) => {
    const [itemName, setItemName] = useState('');
    const dispatch = useDispatch();

    /**
     * Handles form submission to add a new item
     * @param {Object} e - Form event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(itemName));
        closeModal();
    };

    /**
     * Handles input change
     * @param {Object} e - Input change event
     */
    const handleInputChange = (e) => {
        setItemName(e.target.value);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Add Item</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Item name"
                        value={itemName}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="border border-gray-300 rounded-md px-4 py-2 mr-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItemModal;
