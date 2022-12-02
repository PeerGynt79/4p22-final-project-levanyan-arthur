import {configureStore} from '@reduxjs/toolkit';
import xbasketReducer from './xbasket/xbasketSlice'
import accessReducer from './access/accessSlice'
import authReducer from './access/authSlice'
import productsReducer from './products/productsSlice'

export default configureStore({
    reducer: {
        auth:authReducer,
        access:accessReducer,
        products:productsReducer,
        xbasket:xbasketReducer
    }
});