import './MyComponentMain.css';
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

        <div className="tbl">
        <h1 style={{margin:'2vw 0vw 2vw 0vw',fontSize:'2.5vw'}}> Корзина</h1>
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
        <div style={{width:'100%',paddingLeft:'5%',paddingRight:'5%', display:'flex',flexDirection:'row', alignSelf:'stretch'}}>
        <h4 style={{width:'14%', fontSize:'2.5vw',textAlign:'center'}}>Итого:</h4>
        <h4 style={{width:'8%', fontSize:'2.5vw',textAlign:'center'}}>{countBasket}</h4>
        <h4 style={{width:'30%', fontSize:'2.5vw',textAlign:'center'}}>товаров на сумму</h4>
        <h4 style={{width:'19%', fontSize:'2.5vw',textAlign:'center'}}>{countPrice} р.</h4>
        {

        }
        <Link  className="btn"style={{width:'30%',fontSize:'2vw',}}  onClick={buyClick} to='/buydone'> Выполнить покупку </Link>
        </div>

        </div>

        )} else {
            

        return (
            <main className="main"  >
                <h1 style={{fontSize:'2.5vw'}}>Корзина пуста.</h1>
                <h3 style={{fontSize:'1.5vw'}}>Посмотрите предложения на главной странице.</h3>
            </main>)
    }
};
