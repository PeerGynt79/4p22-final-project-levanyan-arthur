import MyComponentBasketCard from './MyComponentBasketCard';
import './MyComponentMain.css';
import './MyComponentHeader.css';
import { useEffect, useState} from 'react';

import axios from 'axios';

export default function MyComponentBasketCards () {


        const [goods,setGoods] = useState([]);

        useEffect( () => {
            axios.get('https://fakestoreapi.com/products')
            .then((result)=>{
                setGoods(result.data)
            })
        }, []);

        return (
        <div style={{display:'flex',flexDirection:'column'}}>    
        <h1>Корзина</h1>
        <div className="tbl">
        {goods.map((item)=>
            {
            return <MyComponentBasketCard key={Number(item.id)}
                                image={item.image} 
                                description={item.description} 
                                title={item.title}
                                price={item.price}/>
            })
        }
        <div style={{width:'100%',paddingLeft:'5%',paddingRight:'5%', display:'flex',flexDirection:'row', alignSelf:'stretch'}}>
        <h4 style={{width:'15%', fontSize:'4vh',textAlign:'center'}}>Итого:</h4>
        <h4 style={{width:'5%', fontSize:'4vh',textAlign:'center'}}>180</h4>
        <h4 style={{width:'15%', fontSize:'4vh',textAlign:'center'}}>товаров</h4>
        <h4 style={{width:'15%', fontSize:'4vh',textAlign:'center'}}>на сумму</h4>
        <h4 style={{width:'25%', fontSize:'4vh',textAlign:'center'}}>ХХХХХХ.ХХ р.</h4>
                <button  className="btn"style={{width:'30%',fontSize:'3vh',}}> Выполнить покупку </button>
        </div>

        </div>
        </div>
)
};
