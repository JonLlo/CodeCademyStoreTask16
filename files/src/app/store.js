// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { cartReducer } from '../features/cart/cartSlice.js';
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js'

// Create and export the store here.
const reducers = {
  cart: cartReducer,
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer
  
}
const rootReducer = combineReducers(reducers)
export const store = createStore(rootReducer)