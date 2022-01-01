

import {createSlice , configureStore} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState : {items : [] , totalQuantity : 0},
    reducers : {
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id : newItem.id ,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.name
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;

            }
        },
        removeFromCart(state,action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
})

const store = configureStore({
    reducer : cartSlice.reducer
});

export const cartActions = cartSlice.actions;

export default store;