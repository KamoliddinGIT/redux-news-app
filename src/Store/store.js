import news from '../News/newsSlice'
import filter  from '../News/filterSlice';
import thunk from 'redux-thunk'
import stringMiddleware from '../middlewares/stringMiddleware';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {news, filter},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk,stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;