import MyComponentBasketCards from './MyComponentBasketCards';
import MyComponentCards from './MyComponentCards';
import MyComponentLargeCard from './MyComponentLargeCard';
import MyComponentEntry from './MyComponentEntry';
import MyComponentFeedback from './MyComponentFeedback';
import MyComponentBuyActivated from './MyComponentBuyActivated';
import MyComponentFeedbackActivated from './MyComponentFeedbackActivated';
import MyComponentDataManipulation from './MyComponentDataManipulation';
import MyComponentNothing from './MyComponentNothing';
import MyComponentSecretActivated from './MyComponentSecretActivated';
import LayoutBasic from './LayoutBasic';
import './MyComponentMain.css';
import './MyComponentHeader.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {initXBasket,loadXBasket} from "../store/xbasket/xbasketSlice"

function MyComponentMain (){
/*
    //const response = await axios('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    //console.log(response.data);

    const response = axios.get('https://fakestoreapi.com/products')
    console.log('Resp:',response);
    //console.log('Goods:',goods);
    //let drawnData=goods;

*/
const dispatch=useDispatch();
    const loadedBasket=JSON.parse(localStorage.getItem("basket"))
    console.log(loadedBasket);

            axios.get('https://fakestoreapi.com/products')
            .then((result)=>{
                if ((loadedBasket===null)||(loadedBasket===undefined)){
                    console.log('Basket is null')
                    dispatch(initXBasket(result.data.length))
                } else {
                    console.log('Basket is full')
                dispatch(loadXBasket(loadedBasket))
                };
                localStorage.setItem("prices", JSON.stringify(result.data.map(item=>item.price)));
            })


/*
    if ((loadedBasket===null)||(loadedBasket===undefined)){
            console.log('Basket is null')
            dispatch(initXBasket(20))
        } else {
            console.log('Basket is full')
            dispatch(loadXBasket(loadedBasket))
        };
*/

return (
    <div  className='body-container'>
        <Routes>
            <Route path={'/'} element={<LayoutBasic/>}>
                <Route index element={(
                    <>
{

/*
<MyComponentDataManipulation/>
*/
}
    <MyComponentCards/>
                    </>
                )}>
                </Route>    
                <Route path={'secret'} element={<MyComponentSecretActivated/>}/>
                <Route path={'entry'} element={<MyComponentEntry/>}/>
                <Route path={'feedback'} element={<MyComponentFeedback/>}/>
                <Route path={'buydone'} element={<MyComponentBuyActivated/>}/>
                <Route path={'feedbackdone'} element={<MyComponentFeedbackActivated/>}/>
                <Route path={'largecard'}>
                    <Route path={':idCard'} element={<MyComponentLargeCard/>}/>
                </Route>
                <Route path={'basketcards'} element={<MyComponentBasketCards/>}/>
                <Route path={'*'} element={<MyComponentNothing/>}/>
            </Route>
        </Routes>
    </div>
    )
}
export default MyComponentMain;
