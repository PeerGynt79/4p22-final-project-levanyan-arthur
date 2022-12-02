import './MyComponentMain.css';
import './MyComponentHeader.css';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {addToXBasket, deleteFromXBasket} from "../store/xbasket/xbasketSlice"

export default function MyComponentLargeCard () {
    const {idCard}=useParams()
    const dispatch=useDispatch();
    const basket=useSelector((state) => state.xbasket)
    const [products] = useSelector((state) => [state.products.entities]);
    
    const myclick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (event.target.innerText==="Добавить в список"){
            event.target.innerText="Убрать из списка";
            event.target.style.borderColor='lime';
            event.target.style.backgroundColor= 'maroon';
            dispatch(addToXBasket(idCard-1))
        }
         else if (event.target.innerText==="Убрать из списка"){
            event.target.innerText="Добавить в список"
            event.target.style.borderColor='bisque';
            event.target.style.backgroundColor= 'darkgreen';
            dispatch(deleteFromXBasket(idCard-1))
        } 
    }

    return (
    <>
    <h1 style={{fontSize:'3vw'}}>{`${products[idCard-1].title}`}</h1>
    <div style={{display:'flex',flexDirection:'column',paddingLeft:'3vw',paddingRight:'3vw'}}>
        <img style={{width:'30vw', paddingLeft:'3vw',paddingRight:'3vw', alignSelf:'center'}} alt = {`product ${products[idCard-1].id}`} src={`${products[idCard-1].image}`}/>  
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
        <button className="btn btn_large-card"  onClick={myclick}  style= {(basket[idCard-1])?{borderColor:'lime',backgroundColor:'maroon'}:{borderColor:'bisque',backgroundColor:'darkgreen'}}>{(basket[idCard-1])?'Убрать из списка':'Добавить в список'}</button>   
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'2vw', textAlign:'left'}}>Категория:</h3><h4 style={{width:'70%',fontSize:'2vw', textAlign:'left'}}>{`${products[idCard-1].category}`}</h4></div>
            <div style={{width:'100%', display:'flex',flexDirection:'row'}}><h3 style={{width:'30%',fontSize:'2vw', textAlign:'left'}}>Описание:</h3><h4 style={{width:'70%',fontSize:'2vw', textAlign:'left'}}>{`${products[idCard-1].description}`}</h4></div>

        </div>
    </div>
    </>
    )
};
