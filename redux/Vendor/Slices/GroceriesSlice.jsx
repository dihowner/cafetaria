import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    groceries: null
}

const createGroceriesSlice = createSlice({
    name: 'groceries',
    initialState,
    reducers: {
        set_Groceries(state, action) {
            state.groceries = action.payload;
        },
        createGroceries(state, action) {
            const newGroceries = action.payload;
            state.groceries.push(newGroceries);
        },
        deleteGroceries(state, action) {
            const groceriesIdToDelete = action.payload;
            state.groceries = state.groceries.filter((grocery) => grocery.id !== groceriesIdToDelete);
        },
        updateGroceries(state, action) {
            const updatedGroceries = action.payload;
            const index = state.groceries.findIndex((grocery) => grocery.id === updatedGroceries.id);
            if (index !== -1) {
                state.groceries[index] = updatedGroceries;
            }
        },
    },
});

export const { createGroceries, deleteGroceries, updatedGroceries, set_Groceries } = createGroceriesSlice.actions
export default createGroceriesSlice.reducer