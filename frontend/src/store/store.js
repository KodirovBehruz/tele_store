import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { reducer as basketReducer } from './basket/basket.slice'
import { reducer as favoritesReducer } from "./favorites/favorites.slice";

const rootReducer = combineReducers({
    basket: basketReducer,
    favorites: favoritesReducer,
})

export const store = configureStore({
    reducer: rootReducer
});
