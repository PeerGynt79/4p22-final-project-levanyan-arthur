import MyComponentBasketCards from './MyComponentBasketCards';
import MyComponentCards from './MyComponentCards';
import MyComponentLargeCard from './MyComponentLargeCard';
import MyComponentEntry from './MyComponentEntry';
import MyComponentFeedback from './MyComponentFeedback';
import MyComponentBuyActivated from './MyComponentBuyActivated';
import MyComponentFeedbackActivated from './MyComponentFeedbackActivated';
import MyComponentSecretActivated from './MyComponentSecretActivated';
import LayoutBasic from './LayoutBasic';

import { Route } from "react-router-dom";
import { useSelector } from "react";

export default function ProtectedRoutes (){

    const authState=useSelector((state)=>state.auth);

    if (authState) {return(
        
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
            </Route>)
    }else{
        return(
            <Route path={'/'} element={<LayoutBasic/>}>
                <Route index element={<MyComponentEntry/>}/>
            </Route>
        )
    }
}
    
