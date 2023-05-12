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
