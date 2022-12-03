import './styles.css';
import MyComponentBasketCard from './MyComponentBasketCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromXBasket } from '../store/xbasket/xbasketSlice';



export default function MyComponentBasketCards () {

    
    const dispatch=useDispatch();
    const basket=useSelector((state)=>state.xbasket); 
    const [products] = useSelector((state) => [state.products.entities]);
    const countBasket = basket.reduce((accum, item) => accum + item, 0)
    const countPrice = Math.round(basket.reduce((accum, item,idx) => accum + item*products[idx].price, 0)*100)/100
  
    
    const buyClick = () =>{
        products.filter((item)=>!!basket[item.id-1]).forEach(element => {
            console.log(`Наименование: ${element.title}; количество: ${basket[element.id-1]}; сумма:${Math.round(basket[element.id-1]*element.price*100)/100}`);
        });

        for (const idx in basket) {
            dispatch(deleteFromXBasket(idx))    
        };
    }
    if (countBasket) {
        return (

        <div className="main__cards-area">
        <h1 className='common__text_big'> Корзина</h1>
        {products.filter((item)=>!!basket[item.id-1]).map((item)=>
            {    

            return <MyComponentBasketCard key={Number(item.id)}
                                id={item.id}
                                image={item.image} 
                                description={item.description} 
                                title={item.title}
                                price={item.price}/>
            })
        }
        <div className='basket__buttons-row'>
        <span className='common__text_big common__text_margin'>Итого:</span>
        <span className='common__text_big common__text_margin'>{countBasket}</span>
        <span className='common__text_big common__text_margin'>товаров на сумму</span>
        <span className='common__text_big common__text_margin'>{countPrice} р.</span>
        </div>
    {

        }
        <Link  className="common__button common__button_basket common__text"  onClick={buyClick} to='/buydone'> Выполнить покупку </Link>
    
        </div>

        )} else {
            

        return (
            <main className="main"  >
                <h1 className='common__text_big'>Корзина пуста.</h1>
                <h3 className='common__text'>Посмотрите предложения на главной странице.</h3>
            </main>)
    }
};
