import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meals: null
}



const createMealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        set_Meals(state, action) {
            state.meals = action.payload;
        },
        createMeal(state, action) {
            const newMeal = action.payload;
            state.meals.push(newMeal);
        },
        deleteMeal(state, action) {
            const mealIdToDelete = action.payload;
            state.meals = state.meals.filter((meal) => meal.id !== mealIdToDelete);
        },
        updateMeal(state, action) {
            const updatedMeal = action.payload;
            const index = state.meals.findIndex((meal) => meal.id === updatedMeal.id);
            if (index !== -1) {
                state.meals[index] = updatedMeal;
            }
        },
    },
});

export const { createMeal, deleteMeal, updateMeal,set_Meals } = createMealSlice.actions;
export default createMealSlice.reducer;