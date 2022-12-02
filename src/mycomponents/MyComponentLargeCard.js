import './MyComponentMain.css';
import './MyComponentHeader.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addToXBasket, deleteFromXBasket} from "../store/xbasket/xbasketSlice"

export default function MyComponentLargeCard () {
    const {idCard}=useParams()
    const [product,setProduct] = useState({});
    const dispatch=useDispatch();
    const basket=useSelector((state) => state.xbasket)
    
    const myclick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (event.target.innerText==="Добавить в список"){
            event.target.innerText="Убрать из списка";
            event.target.style.borderColor='lime';
            event.target.style.backgroundColor= 'maroon';
            dispatch(addToXBasket(product.id-1))
        }
         else if (event.target.innerText==="Убрать из списка"){
            event.target.innerText="Добавить в список"
            event.target.style.borderColor='bisque';
            event.target.style.backgroundColor= 'darkgreen';
            dispatch(deleteFromXBasket(product.id-1))
        } 
    }

    useEffect( () => {
        (async()=>{
            const response = await fetch(`https://fakestoreapi.com/products/${idCard}`)
            const result = await response.json()
                setProduct(result);
        })(); 

    }, [idCard]);    
    
    return (
    <>
    <h1 style={{fontSize:'3vw'}}>{`${product.title}`}</h1>
    <div style={{display:'flex',flexDirection:'column',paddingLeft:'3vw',paddingRight:'3vw'}}>
        <img style={{width:'30vw', paddingLeft:'3vw',paddingRight:'3vw', alignSelf:'center'}} alt = {`product ${product.id}`} src={`${product.image}`}/>  
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
        <button className="btn btn_large-card"  onClick={myclick}  style= {(basket[product.id-1])?{borderColor:'lime',backgroundColor:'maroon'}:{borderColor:'bisque',backgroundColor:'darkgreen'}}>{(basket[product.id-1])?'Убрать из списка':'Добавить в список'}</button>   
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'2vw', textAlign:'left'}}>Категория:</h3><h4 style={{width:'70%',fontSize:'2vw', textAlign:'left'}}>{`${product.category}`}</h4></div>
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'2vw', textAlign:'left'}}>Описание:</h3><h4 style={{width:'70%',fontSize:'2vw', textAlign:'left'}}>{`${product.description}`}</h4></div>

        </div>
    </div>
    </>
    )
};
