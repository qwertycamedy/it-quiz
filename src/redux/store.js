import {configureStore} from '@reduxjs/toolkit';
import auth from './slices/authSlice';
import katas from './slices/katasSlice';
import users from './slices/usersSlice';

export const store = configureStore({
    reducer: {
        auth,
        katas,
        users,
    }
})