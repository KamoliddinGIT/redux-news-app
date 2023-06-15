import { createReducer } from "@reduxjs/toolkit"
import { newsAdded, newsDelete, newsFetched, newsFetching, newsFetchingError } from "../actions/actions"

const initialState = {
    isLoading: 'none',
    news: [],
}

const news = createReducer(initialState, (builder)=>{
    builder
    .addCase(newsFetching, (state)=>{
        state.isLoading = 'Loading'
    })
    .addCase(newsFetched, (state, action)=>{
        state.isLoading = 'Loaded'
        state.news = action.payload
    })
    .addCase(newsFetchingError, (state)=>{
        state.isLoading = "Loading_Error"
    })
    .addCase(newsAdded, (state,action)=>{
        state.news.push(action.payload)
    })
    .addCase(newsDelete, (state,action)=>{
        state.news = state.news.filter(item=> item.id !== action.payload)
    })
    .addDefaultCase()
})

export {news}