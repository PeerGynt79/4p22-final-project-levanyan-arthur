import MyComponentHeader from './MyComponentHeader';
import MyComponentFooter from './MyComponentFooter';
import MyComponentBasketCards from './MyComponentBasketCards';
import MyComponentCards from './MyComponentCards';
import MyComponentLargeCard from './MyComponentLargeCard';
import MyComponentEntry from './MyComponentEntry';
import MyComponentFeedback from './MyComponentFeedback';
import MyComponentBuyActivated from './MyComponentBuyActivated';
import MyComponentFeedbackActivated from './MyComponentFeedbackActivated';
//import MyComponentCategories from './MyComponentCategories';
import MyComponentDataManipulation from './MyComponentDataManipulation';
import './MyComponentMain.css';
import './MyComponentHeader.css';

function MyComponentMain (){
/*
    //const response = await axios('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    //console.log(response.data);

    const response = axios.get('https://fakestoreapi.com/products')
    console.log('Resp:',response);
    //console.log('Goods:',goods);
    //let drawnData=goods;

*/

return (
        <div  className='body-container'>
        <MyComponentHeader/>
        <hr/>    
        <MyComponentDataManipulation/>
        <hr/>    
        <main className='Main-info' style={{display:'flex', flexDirection:'row'}}>
        {
        /*
        <MyComponentCategories/>
        <hr/> 
        */
        }   
        <MyComponentCards/>
        </main>
        <hr/>    
        <MyComponentEntry/>
        <hr/>    
        <MyComponentFeedback/>
        <hr/>    
        <MyComponentBuyActivated/>
        <hr/>    
        <MyComponentFeedbackActivated/>
        <hr/>    
        <MyComponentLargeCard/>
        <hr/>    
        <main className='Main-info' style={{display:'flex', flexDirection:'row'}}>
        {
        /*
        <MyComponentCategories/>
        <hr/> 
        */
        }   
        <MyComponentBasketCards/>
        </main>
        <hr/>    
        <MyComponentFooter/>
    </div>
    )
}
export default MyComponentMain;
