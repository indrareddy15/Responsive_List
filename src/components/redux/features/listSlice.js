import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lists: [],
    selectedLists: [],
    tempLists: [],
    status: 'idle',
    error: null
};

const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        setLists: (state, action) => {
            state.lists = action.payload;
        },
        // Add other reducers here
    }
});

export const { setLists } = listSlice.actions;
export default listSlice.reducer;