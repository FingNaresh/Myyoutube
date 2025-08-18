import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';

const store=configureStore({
    reducer: {
        app:appSlice,
        search: searchSlice, // Assuming you have a searchSlice imported
    },
});

export default store;