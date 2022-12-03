import './styles.css';
import MyComponentBasketCards from './MyComponentBasketCards';
import MyComponentCards from './MyComponentCards';
import MyComponentLargeCard from './MyComponentLargeCard';
import MyComponentEntry from './MyComponentEntry';
import MyComponentFeedback from './MyComponentFeedback';
import MyComponentBuyActivated from './MyComponentBuyActivated';
import MyComponentFeedbackActivated from './MyComponentFeedbackActivated';
import MyComponentNothing from './MyComponentNothing';
import LayoutBasic from './LayoutBasic';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {initXBasket,loadXBasket} from "../store/xbasket/xbasketSlice"
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getProducts } from '../store/products/productsSlice';


function MyComponentMain (){

const authState=useSelector((state)=>state.auth);

const dispatch=useDispatch();
const loadedBasket=JSON.parse(localStorage.getItem("basket"))
useEffect(() => {        
  dispatch(getProducts());    
}, []);


axios.get('https://fakestoreapi.com/products')
        .then((result)=>{
            if ((loadedBasket===null)||(loadedBasket===undefined)){
                dispatch(initXBasket(result.data.length))
                } else {
                dispatch(loadXBasket(loadedBasket))
                };
            })

return (
    <div  className='body-container'>
        <Routes>
        {authState?
        <Route path={'/'} element={<LayoutBasic/>}>
            <Route index element={<MyComponentCards/>}/>
            <Route path={'entry'} element={<MyComponentEntry/>}/>
            <Route path={'feedback'} element={<MyComponentFeedback/>}/>
            <Route path={'feedbackdone'} element={<MyComponentFeedbackActivated/>}/>
            <Route path={'buydone'} element={<MyComponentBuyActivated/>}/>
            <Route path={'error'} element={<MyComponentNothing/>}/>
            <Route path={'largecard'}>
                <Route path={':idCard'} element={<MyComponentLargeCard/>}/>
            </Route>
            <Route path={'basketcards'} element={<MyComponentBasketCards/>}/>
        </Route>
        :
        <Route path={'/'} element={<LayoutBasic/>}>
            <Route index element={<MyComponentEntry/>}/>
            <Route path={'entry'} element={<Navigate to='/'/>}/>
            <Route path={'secret'} element={<Navigate to='/'/>}/>
            <Route path={'feedback'} element={<Navigate to='/'/>}/>
            <Route path={'feedbackdone'} element={<Navigate to='/'/>}/>
            <Route path={'buydone'} element={<Navigate to='/'/>}/>
            <Route path={'error'} element={<MyComponentNothing/>}/>
            <Route path={'largecard'}>
                <Route path={':idCard'} element={<Navigate to='/'/>}/>
            </Route>
            <Route path={'basketcards'} element={<Navigate to='/'/>}/>
        </Route>
        }
        <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    </div>
    )
}
export default MyComponentMain;
