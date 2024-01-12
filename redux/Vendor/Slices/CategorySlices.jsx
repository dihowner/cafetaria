import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: null
}


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        set_Categories(state, action) {
            state.category = action.payload
        },
        create_Category(state, action) {
            const newCategory = action.payload;
            state.category.push(newCategory);
        },
        updateCategory(state, action) {
            const updatedCategory = action.payload;
            const index = state.category.findIndex((category) => category.id === updatedCategory.id);
            if (index !== -1) {
                state.category[index] = updatedCategory;
            }
        },
    }
})

export const { set_Categories, create_Category, updateCategory } = categorySlice.actions
export default categorySlice.reducer;