import './MyComponentMain.css';
import './MyComponentHeader.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import axios from 'axios';
export default function MyComponentLargeCard () {
    const {idCard}=useParams()
    const [product,setProduct] = useState({});

    useEffect( () => {
        (async()=>{
            const response = await fetch(`https://fakestoreapi.com/products/${idCard}`)
            const result = await response.json()
                setProduct(result);
        })(); 

    }, [idCard]);    
    return (
    <>
    {
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
    }
    <h1 style={{fontSize:'3vw'}}>{`${product.title}`}</h1>
    <div style={{display:'flex',flexDirection:'column',paddingLeft:'3vw',paddingRight:'3vw'}}>
        <img style={{width:'30vw', paddingLeft:'3vw',paddingRight:'3vw', alignSelf:'center'}} alt = {`product ${product.id}`} src={`${product.image}`}/>  
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'1.5vw', textAlign:'left'}}>Категория:</h3><h4 style={{width:'70%',fontSize:'1.3vw', textAlign:'left'}}>{`${product.category}`}</h4></div>
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'1.5vw', textAlign:'left'}}>Описание:</h3><h4 style={{width:'70%',fontSize:'1.3vw', textAlign:'left'}}>{`${product.description}`}</h4></div>
{
//            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%', textAlign:'left'}}>Популярность:</h3><h4 style={{width:'70%', textAlign:'left'}}>{`${product.rating.rate}`}</h4></div>
//            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%', textAlign:'left'}}>Количество:</h3><h4 style={{width:'70%', textAlign:'left'}}>{`${product.rating.count}`}</h4></div>

}

        </div>
    </div>
    </>
    )
};
