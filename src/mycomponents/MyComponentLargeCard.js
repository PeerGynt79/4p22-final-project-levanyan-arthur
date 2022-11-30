import './MyComponentMain.css';
import './MyComponentHeader.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <h1 style={{fontSize:'3vw'}}>{`${product.title}`}</h1>
    <div style={{display:'flex',flexDirection:'column',paddingLeft:'3vw',paddingRight:'3vw'}}>
        <img style={{width:'30vw', paddingLeft:'3vw',paddingRight:'3vw', alignSelf:'center'}} alt = {`product ${product.id}`} src={`${product.image}`}/>  
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'1.5vw', textAlign:'left'}}>Категория:</h3><h4 style={{width:'70%',fontSize:'1.3vw', textAlign:'left'}}>{`${product.category}`}</h4></div>
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'1.5vw', textAlign:'left'}}>Описание:</h3><h4 style={{width:'70%',fontSize:'1.3vw', textAlign:'left'}}>{`${product.description}`}</h4></div>
        </div>
    </div>
    </>
    )
};
