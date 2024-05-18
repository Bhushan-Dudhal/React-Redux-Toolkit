import { createReducer } from "@reduxjs/toolkit"
 

const initialState = {
    c: 0,
};


export const customReducer = createReducer({

    increment: (state, action) => {
        state.c += 1;
    },
    incrementByvalue: (state, action) => {
        state.c += action.payload;
    },

      decrement: (state, action) => {
        state.c -= 1;
    }
    


});