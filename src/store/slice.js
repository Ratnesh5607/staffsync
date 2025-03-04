import { createSlice } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist';

const initialState = {
    isLogin: false,
    empDetails: {}
}

export const empSlice = createSlice({
    name: 'emp',
    initialState,
    reducers: {
        updateStore: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            for (const value in action.payload) {
                state[value] = action.payload[value];
            }
        },
        // this reducer is use when we want to clear all data to store.
        extraReducers: (state) => { 
            console.log(initialState,"ttttt")
            state = initialState
            // console.log(builder,"llllloooo")
            // builder.addCase(PURGE, (state) => {
            //     customEntityAdapter.removeAll(state);
            // });

        },
    }
})

// Action creators are generated for each case reducer function
export const { updateStore,extraReducers } = empSlice.actions

export default empSlice.reducer