
export const addItem = (itemName) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            name: itemName,
            id: new Date().getTime().toString(),
        },
    };
};

export const filterItems = (searchTerm) => {
    return {
        type: 'FILTER_ITEMS',
        payload: searchTerm,
    };
};
