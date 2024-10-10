import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        toggleBasket: (state, { payload: item }) => {
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

export const { actions, reducer } = basketSlice;
export const { toggleBasket, removeItem } = actions;
