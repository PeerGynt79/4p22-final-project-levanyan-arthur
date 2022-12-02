// В самом слайсе тоже есть изменения.
// Вместо объекта reducers будем использовать extraReducers.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Используем функцию createAsyncThunk
// Функция принимает два параметра: строку (название) и асинхронную функцию.
// Название должно состоять из двух частей, разделённых слэшем: название модуля и название самой функции.
// В асинхронной функции можно получить данные и вернуть результат получения данных.
const getProducts = createAsyncThunk(    
    'products/getProducts',    
    async (thunkAPI) => {        
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        return result;    
    })
export const productsSlice = createSlice(
    {   name: 'products',    
        initialState: {
        entities: [],        
        loading: false    
        },    
        extraReducers: {        
            [getProducts.pending]: (state) => {
                state.loading = true;        
            },        
            [getProducts.fulfilled]: (state, { payload }) => {
                state.loading = false;            
                state.entities = payload;        
            },        
            [getProducts.rejected]: (state) => {
                state.loading = false;        
                }    
        }
    })

export default productsSlice.reducer;
export { getProducts };