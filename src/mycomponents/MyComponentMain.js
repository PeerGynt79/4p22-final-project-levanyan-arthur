import MyComponentBasketCards from './MyComponentBasketCards';
import MyComponentCards from './MyComponentCards';
import MyComponentLargeCard from './MyComponentLargeCard';
import MyComponentEntry from './MyComponentEntry';
import MyComponentFeedback from './MyComponentFeedback';
import MyComponentBuyActivated from './MyComponentBuyActivated';
import MyComponentFeedbackActivated from './MyComponentFeedbackActivated';
import MyComponentSecretActivated from './MyComponentSecretActivated';
import LayoutBasic from './LayoutBasic';
import './MyComponentMain.css';
import './MyComponentHeader.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {initXBasket,loadXBasket} from "../store/xbasket/xbasketSlice"
import { Navigate } from 'react-router-dom';

function MyComponentMain (){

const authState=useSelector((state)=>state.auth);
console.log('authState',authState)
const dispatch=useDispatch();
const loadedBasket=JSON.parse(localStorage.getItem("basket"))
axios.get('https://fakestoreapi.com/products')
        .then((result)=>{
            if ((loadedBasket===null)||(loadedBasket===undefined)){
                dispatch(initXBasket(result.data.length))
                } else {
                dispatch(loadXBasket(loadedBasket))
                };
                localStorage.setItem("prices", JSON.stringify(result.data.map(item=>item.price)));
            })

return (
    <div  className='body-container'>
        <Routes>
        {authState?
        <Route path={'/'} element={<LayoutBasic/>}>
            <Route index element={<MyComponentCards/>}/>
            <Route path={'entry'} element={<MyComponentEntry/>}/>
            <Route path={'secret'} element={<MyComponentSecretActivated/>}/>
            <Route path={'feedback'} element={<MyComponentFeedback/>}/>
            <Route path={'buydone'} element={<MyComponentBuyActivated/>}/>
            <Route path={'feedbackdone'} element={<MyComponentFeedbackActivated/>}/>
            <Route path={'largecard'}>
                <Route path={':idCard'} element={<MyComponentLargeCard/>}/>
            </Route>
            <Route path={'basketcards'} element={<MyComponentBasketCards/>}/>
        </Route>
        :
        <Route path={'/'} element={<LayoutBasic/>}>
            <Route index element={<MyComponentEntry/>}/>
        </Route>
        }
        <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    </div>
    )
}
export default MyComponentMain;
