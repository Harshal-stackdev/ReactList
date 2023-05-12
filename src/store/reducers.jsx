/* eslint-disable no-case-declarations */
/**
 * Redux Reducers
 */

const initialState = {
    items: [
        { name: 'Item 1', id: '1' },
        { name: 'Item 2', id: '2' },
        { name: 'Item 3', id: '3' },
    ],
    filteredItems: [],
};

/**
 * Reducer function to handle state updates based on dispatched actions
 * @param {Object} state - Current state
 * @param {Object} action - Dispatched action
 * @returns {Object} Updated state
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'FILTER_ITEMS':
            const searchTerm = action.payload.toLowerCase();
            const filteredItems = searchTerm
                ? state.items.filter((item) =>
                    item.name.toLowerCase().includes(searchTerm)
                )
                : [];
            return {
                ...state,
                filteredItems,
            };
        default:
            return state;
    }
};

export default reducer;
