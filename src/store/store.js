import {configureStore} from '@reduxjs/toolkit';
import xbasketReducer from './xbasket/xbasketSlice'

export default configureStore({
    reducer: {
        xbasket:xbasketReducer
    }
});