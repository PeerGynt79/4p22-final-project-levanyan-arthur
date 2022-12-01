import {configureStore} from '@reduxjs/toolkit';
import xbasketReducer from './xbasket/xbasketSlice'
import accessReducer from './access/accessSlice'
import authReducer from './access/authSlice'

export default configureStore({
    reducer: {
        auth:authReducer,
        access:accessReducer,
        xbasket:xbasketReducer
    }
});