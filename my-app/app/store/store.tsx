import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart';
import productSlice from './features/product';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';

// ...
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductsState, cart: CartState}
export type AppDispatch = typeof store.dispatch;
