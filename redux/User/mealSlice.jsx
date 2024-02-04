import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meals: null,
    restuarant: null,
    submeals: null
}

const MealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        set_Meals(state, action) {
            state.meals = action.payload;
        },
        set_restuarant(state, action) {
            state.restuarant = action.payload
        },
        set_SubMeals(state,action){
            state.submeals=action.payload
        }
    }
})

export const { set_Meals, set_restuarant, set_SubMeals } = MealSlice.actions;
export default MealSlice.reducer