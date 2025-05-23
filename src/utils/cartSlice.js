import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
       items:[],
    },
    reducers:{
        // these are reducer functions, they have access to the state of the slice (here initialState), and action
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            const index=state.items.indexOf(action.payload);
            if (index !== -1) {
                state.items.splice(index, 1); // removes 1 item at position 'index'
              }
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }

})
export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer;