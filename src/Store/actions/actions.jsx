import { newsFetched, newsFetching, newsFetchingError, newsDelete, newsAdded } from '../../News/newsSlice.js'
import {filterFetching, filterError, filterFetched, active_filter_changed} from '../../News/filterSlice.js'


const filterFetch =(request) => (dispatch) => {
    dispatch("FILTER_FETCHING")
    request("http://localhost:3001/filters")
    .then((data)=> dispatch(filterFetched(data)))
    .catch(e=> console.log(e))
}

const newFetch =(request) => (dispatch) => {
    dispatch("NEWS_FETCHING")
    request("http://localhost:3001/news")
   .then((data)=> dispatch(newsFetched(data)))
   .catch(()=> dispatch('FETCHING_ERROR'))    
}

export {newFetch, filterFetch, newsFetched, newsFetching, newsFetchingError, newsDelete, newsAdded, filterFetching, filterFetched, filterError, active_filter_changed}