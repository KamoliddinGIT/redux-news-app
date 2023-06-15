import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: 'none',
    news: []
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        newsFetching: (state)=>{
            state.isLoading = 'Loading'
        },
        newsFetched: (state, action)=>{
            state.isLoading = 'Loaded'
            state.news = action.payload
        },
        newsFetchingError: (state)=>{
            state.isLoading = "Loading_Error"
        },
        newsAdded: (state, action)=>{
            state.news.push(action.payload)
        },
        newsDelete: (state, action)=>{
            state.news = state.news.filter(item=> item.id !== action.payload)
        }
    }
})

const {actions, reducer} = newsSlice;
export default reducer;
export const {
    newsFetching, 
    newsFetched, 
    newsFetchingError, 
    newsAdded, 
    newsDelete}
 = actions;