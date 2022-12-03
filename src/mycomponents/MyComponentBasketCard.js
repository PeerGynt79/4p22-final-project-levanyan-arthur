import './styles.css';
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
        <div className="card-main">
            <img className="card-pic" alt = {props.title} src={props.image}/>  
            <div className="card__info">
                <span className='card-title__title'>{props.title}</span>
                <div className="basket__buttons-row">
                    <button className="common__button common__button_basket common__button_9" onClick={tenMinus}> -10 </button>
                    <button  className="common__button common__button_basket common__button_6" onClick={oneMinus}> -1 </button>
                    <button  className="common__button common__button_basket common__button_29" > В корзине : {basket[props.id-1]} </button>
                    <button className="common__button common__button_basket common__button_9" onClick={tenPlus}> +10 </button>
                    <button  className="common__button common__button_basket common__button_6" onClick={onePlus}> +1 </button>
                    <button  className="common__button common__button_basket common__button_36" onClick={allMinus}> Удалить позицию</button>
                </div>
            </div>
            <span className='card-title__price card-title__basket-text'>{props.price}р.</span>
            <span className='card-title__price card-title__basket-text'>Цена</span>
        </div> 
    )
};
