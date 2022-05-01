import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    list: {},
    item: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getList: (state, { payload }) => {
            state.list = payload
        },
        getByMovieId: (state, { payload }) => {
            state.item = payload
        },
        clearState: (state) => {
            state.list = {}
            state.item = {}
        }
    }
})
export const movieAction = movieSlice.actions;
export default movieSlice;