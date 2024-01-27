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
            // const updatedGroceries = action.payload;
            // const index = state.groceries.findIndex((grocery) => grocery.id === updatedGroceries.id);
            // if (index !== -1) {
            //     state.groceries[index] = updatedGroceries;
            // }
            const updatedGroceries = action.payload;
            const updatedIndex = state.groceries.findIndex((grocery) => grocery.id === updatedGroceries.id);

            if (updatedIndex !== -1) {
                // Create a new array with the updated grocery
                const newGroceries = [...state.groceries];
                newGroceries[updatedIndex] = updatedGroceries;

                return { ...state, groceries: newGroceries };
            }

            // If the grocery to update is not found, return the current state
            return state;
        },
    },
});

export const { createGroceries, deleteGroceries, updateGroceries, set_Groceries } = createGroceriesSlice.actions
export default createGroceriesSlice.reducer