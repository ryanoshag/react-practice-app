import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// This is equivalent to using window.localStorage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart-reducer';

const persistConfig = {
    key: 'root',
    storage,
    // User storage is being handled by firebase, so the only reducer that we want to persist is the cart.
    whitelist: [ 'cart' ]
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);