import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subMeal: null
}


const subMealSlice = createSlice({
    name: "submeal",
    initialState,
    reducers: {
        set_submeal(state, action) {
            state.subMeal = action.payload
        },
        create_Submeal(state, action) {
            const newSubmeal = action.payload;
            state.subMeal.push(newSubmeal)
        },
        update_submeal(state, action) {
            const updatedSubmeal = action.payload;
            const index = state.subMeal.findIndex((subMeal) => subMeal.id === updatedSubmeal.id);
            if (index !== -1) {
                state.subMeal[index] = updatedSubmeal
            }
        }
    }
})

export const { set_submeal, create_Submeal, update_submeal } = subMealSlice.actions
export default subMealSlice.reducer;