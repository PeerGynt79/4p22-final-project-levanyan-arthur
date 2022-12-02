// Импортируем дополнительно функцию createAsyncThunk из toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Используем функцию createAsyncThunk
// Функция принимает два параметра: строку (название) и асинхронную функцию.
// Название должно состоять из двух частей, разделённых слэшем: название модуля и название самой функции.
// В асинхронной функции можно получить данные и вернуть результат получения данных.
const getProducts = createAsyncThunk(    'products/getProducts',    async (thunkAPI) => {        
    console.log('getProducts');        
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    console.log('result', result);
    return result;    
})