

import {createSlice , configureStore} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState : {items : [] , totalQuantity : 0,isEmpty : true},
    reducers : {
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.isEmpty = false;
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
            if(state.totalQuantity === 0){
                state.isEmpty = true;
            }
        },
    }
})


const accountSlice = createSlice({
    name : 'account',
    initialState : {isLoggedIn : false , user : null},
    reducers : {
       login(state , action) {
           state.isLoggedIn = true;
           state.user = action.payload;
       },
       logout(state , action) {
           state.isLoggedIn = false;
       }
    }
})

const locationSlice = createSlice({
    name : 'location',
    initialState : {lat : '' , lng : ''},
    reducers : {
        setLocation(state,action) {
            state.lat = action.payload.lat;
            state.lng = action.payload.lng;
        }
    }
})



const store = configureStore({
    reducer : {
        cart : cartSlice.reducer,
        account : accountSlice.reducer,
        location : locationSlice.reducer
    }
});

export const cartActions = cartSlice.actions;

export const accountActions = accountSlice.actions;

export const locationActions = locationSlice.actions;

export default store;