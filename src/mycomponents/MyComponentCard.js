import { Link } from 'react-router-dom';
import './MyComponentMain.css';
import {useDispatch, useSelector} from 'react-redux'
import {addToXBasket, deleteFromXBasket} from "../store/xbasket/xbasketSlice"
/*
"id":1,
"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price":109.95,
"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category":"men's clothing",
"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating":
    {
        "rate":3.9,
        "count":120
    }
*/
export default function MyComponentCard (props) {
    const dispatch=useDispatch();
    const basket=useSelector((state) => state.xbasket)
//    let count = basket.reduce((Sum, a) => Sum + a, 0);

    const myclick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (event.target.innerText==="Добавить в список"){
            event.target.innerText="Убрать из списка";
            event.target.style.borderColor='lime';
            event.target.style.backgroundColor= 'maroon';
            dispatch(addToXBasket(props.id-1))
//            count+=1;
        }
         else if (event.target.innerText==="Убрать из списка"){
            event.target.innerText="Добавить в список"
            event.target.style.borderColor='bisque';
            event.target.style.backgroundColor= 'darkgreen';
//            count-=basket[props.id-1];
            dispatch(deleteFromXBasket(props.id-1))
        } 
//        if (count) {console.log('полная корзина',count)} else {console.log('пустая корзина',count)}
    }

        return (
        <Link to={`/largecard/${props.id}`}>
{
        <div className="Card-main">
            {//<div className="Card-title">
            }    
                <img className="Card-pic" alt = {props.title} src={props.image}/>  
                <div className="divcenter">
                 <span className='Card-title__title'>{props.title}</span>
                 <button className="btn"  onClick={myclick} 
                 style= {(basket[props.id-1])?{borderColor:'lime',backgroundColor:'maroon'}:{borderColor:'bisque',backgroundColor:'darkgreen'}}
                 
                 
                 >{(basket[props.id-1])?'Убрать из списка':'Добавить в список'}</button>   
                </div>
                <span className='Card-title__price Card-title__price_left'>{props.price}р.</span>
                <span className='Card-title__price Card-title__price_right'>Цена</span>
            {//</div>
            } 
        </div> 
}
{
/*        <div className="Card-main">
            {//<div className="Card-title">
            }    
                <img className="Card-pic" alt = {props.title} src={props.image}/>  
                <div className="divcenter">
                <span className='Card-title__title'>{props.title}</span>
                <div style={{width:'20vw',paddingLeft:'5vw',paddingRight:'5vw', display:'flex',flexDirection:'row'}}>
                <button className="btn Card-title__price_left" onClick={()=>event.preventDefault;stopdispatch(removeFromXBasket(props.id-1))}> - </button>
                <button  className="btn Card-title__price_right" onClick={()=>dispatch(addToXBasket(props.id-1))}> + </button>
                <button  className="btn"> {products[props.id-1]} </button>
                <button  className="btn"  onClick={()=>dispatch(deleteFromXBasket(props.id-1))}> Удалить </button>
                </div>
                </div>
                <span className='Card-title__price Card-title__price_left'>{props.price}р.</span>
                <span className='Card-title__price Card-title__price_right'>Цена</span>
    
            {//</div>
            } 
        </div> 
*/
}

        </Link>    
    )
};
