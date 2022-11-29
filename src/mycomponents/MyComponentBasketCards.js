import MyComponentBasketCard from './MyComponentBasketCard';
import './MyComponentMain.css';

import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function MyComponentBasketCards () {
    const basket=useSelector((state)=>state.xbasket); 
    const prices=JSON.parse(localStorage.getItem("prices"))
    const countBasket = basket.reduce((accum, item) => accum + item, 0)
    const countPrice = Math.round(basket.reduce((accum, item,idx) => accum + item*prices[idx], 0)*100)/100
//        let  prices;

    const [goods,setGoods] = useState([]);
    
    useEffect( () => {

        axios.get('https://fakestoreapi.com/products')
            .then((result)=>{
//                prices=result.data.map(item=>item.price)
//                console.log('prices',prices)
                setGoods(result.data.filter((item)=>!!basket[item.id-1]))
            })
    },[goods])

    if (countBasket) {
        return (

        <div className="tbl">
        <h1 style={{margin:'2vw 0vw 2vw 0vw',fontSize:'2.5vw'}}> Корзина</h1>
        {goods.map((item)=>
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
        <Link  className="btn"style={{width:'30%',fontSize:'2vw',}}  to='/buydone'> Выполнить покупку </Link>
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
