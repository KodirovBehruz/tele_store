import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, { payload: item }) => {
            const isExist = state.some(r => r.id === item.id);
            if (isExist) {
                return state.filter(r => r.id !== item.id);
            } else {
                state.push(item);
            }
        },
        removeItem: (state, { payload: itemId }) => {
            return state.filter(item => item.id !== itemId);
        }
    }
});

export const { actions, reducer } = favoritesSlice;
