import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeFilter: 'all',
    filterLoading: 'none',
    filterNews: [],
    filters: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterFetching: (state)=>{
            state.filterLoading = 'Loading'
        },
        filterFetched: (state, action)=>{
            state.filterLoading = 'Loaded'
            state.filters = action.payload
        },
        filterError: (state)=>{
            state.filterLoading = 'Loading_Error'
        },
        active_filter_changed: (state, action)=>{
            state.activeFilter = action.payload
        }
    }
})

const {actions, reducer} = filterSlice;
export default reducer;
export const {
    filterFetching, 
    filterFetched, 
    filterError, 
    active_filter_changed}
 = actions;