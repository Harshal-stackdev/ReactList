/**
 * Main App Component
 */

import React from 'react';
import { Provider } from 'react-redux';
import AddItemModal from './components/AddItemModal';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import store from './store/store';

const App = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center bg-blue-500 text-white py-2 px-4 rounded">
            Redux List App
          </h1>
          <div className="flex gap-2 justify-center">
            <div>
              <button
                onClick={openModal}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                +
              </button>
            </div>
            <div>
              <SearchBar />
            </div>
          </div>
          <ItemList />
          {showModal && <AddItemModal closeModal={closeModal} />}
        </div>
      </div>
    </Provider>
  );
};

export default App;
