import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import productReducer from '../features/productSlice';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';
import profileReducer from '../features/profileSlice';
import orderReducer from '../features/orderSlice';
// import registerReducer from "../features/registerSlice";
import newsReducer from '../features/newsSlice';
import advertsReducer from '../features/advertsSlice';
import teamsReducer from '../features/teamsSlice';
import matchesReducer from '../features/matchesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    userDetails: profileReducer,
    order: orderReducer,
    news: newsReducer,
    adverts: advertsReducer,
    teams: teamsReducer,
    match: matchesReducer,
  },
});

export default store;
