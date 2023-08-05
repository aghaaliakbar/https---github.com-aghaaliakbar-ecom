import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore'; // Correct import

const Providers = ({ children }: { children: React.ReactNode }) => {
  let persistor = persistStore(store); // Corrected function name
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}> {/* Corrected component usage */}
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
