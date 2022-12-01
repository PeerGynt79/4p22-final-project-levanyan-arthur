import './MyComponentMain.css';
import {useDispatch, useSelector} from 'react-redux'
import {addToXBasket, removeFromXBasket,add10ToXBasket, remove10FromXBasket,deleteFromXBasket} from "../store/xbasket/xbasketSlice"

export default function MyComponentBasketCard (props) {
    
    
    const dispatch=useDispatch();
    const basket=useSelector((state)=>state.xbasket); 
    const onePlus = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(addToXBasket(props.id-1))
    }
    const oneMinus = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(removeFromXBasket(props.id-1))
    }
    const tenPlus = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(add10ToXBasket(props.id-1))
    }
    const tenMinus = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(remove10FromXBasket(props.id-1))
    }
    const allMinus = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(deleteFromXBasket(props.id-1))
    }    
    return (
        <div className="Card-main">
            <img className="Card-pic" alt = {props.title} src={props.image}/>  
            <div className="divcenter">
                <span className='Card-title__title'>{props.title}</span>
                <div style={{width:'100%',paddingLeft:'2%',paddingRight:'2%', display:'flex',flexDirection:'row'}}>
                    <button className="btn Card-title__price_left"  style={{width:'9%',marginLeft:'0.5%',marginRight:'0.5%'}} onClick={tenMinus}> -10 </button>
                    <button  className="btn Card-title__price_right"  style={{width:'6%',marginLeft:'0.5%',marginRight:'0.5%'}} onClick={oneMinus}> -1 </button>
                    <button  className="btn"  style={{width:'29%',marginLeft:'0.5%',marginRight:'0.5%'}}> В корзине : {basket[props.id-1]} </button>
                    <button className="btn Card-title__price_left" style={{width:'9%',marginLeft:'0.5%',marginRight:'0.5%'}} onClick={tenPlus}> +10 </button>
                    <button  className="btn Card-title__price_right"  style={{width:'6%',marginLeft:'0.5%',marginRight:'0.5%'}} onClick={onePlus}> +1 </button>
                    <button  className="btn"   style={{width:'36%',marginLeft:'0.5%',marginRight:'0.5%'}} onClick={allMinus}> Удалить позицию</button>
                </div>
            </div>
            <span className='Card-title__price Card-title__price_left'>{props.price}р.</span>
            <span className='Card-title__price Card-title__price_right'>Цена</span>
        </div> 
    )
};
