import {configureStore} from '@reduxjs/toolkit';
import nav from './slices/navSlice';
import auth from './slices/authSlice';

export const store = configureStore({
    reducer: {
        nav,
        auth,
    }
})