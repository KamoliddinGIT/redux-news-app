import { createReducer } from "@reduxjs/toolkit"
import { active_filter_changed, filterError, filterFetched, filterFetching } from "../actions/actions"

const initialState = {
    activeFilter: 'all',
    filterLoading: 'none',
    filterNews: [],
    filters: []
}

const filter = createReducer(initialState, {
    [filterFetching]: (state)=> {state.filterLoading = 'Loading'},
    [filterFetched]: (state, action)=> {
        state.filterLoading = 'Loaded'
        state.filters = action.payload
    },
    [filterError]: (state)=> {state.filterLoading = 'Loading_Error'},
    [active_filter_changed]: (state, action)=> {state.activeFilter = action.payload}
}, [], state => state)

export {filter}