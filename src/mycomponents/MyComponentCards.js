import './MyComponentMain.css';
import MyComponentCard from './MyComponentCard';
import axios from 'axios';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function MyComponentCards () {
const [searchValue,setSearchValue] = useState('');
const [categoryValue,setCategoryValue] = useState('all');
const [goods,setGoods] = useState([]);
const [categories,setCategories] = useState([]);
useEffect( () => {
    axios.get('https://fakestoreapi.com/products')
    .then((result)=>{
            const newCategories = Array.from(new Set(result.data.map((item)=>item.category)))
            newCategories.unshift('all')
            setCategories(newCategories)
    })
},[])
useEffect( () => {
  axios.get('https://fakestoreapi.com/products')
  .then((result)=>{
    setGoods(result.data)
  })
}, []);
return (
  <>
    <div className="header" style={{backgroundColor:'white',zIndex:'10',position:"sticky", top:'0px'}}>
      <div className="header__side">
        <span className="header-side__item" style={{justifySelf: 'left',fontSize:'2.5vw', marginLeft:'2vw', marginRight:'3vw'}} >Поиск</span>
        <input className="header-side__item" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} style={{outline :'none',fontSize:'2.5vw',alignSelf:'center', width:'25vw'}}></input>
      </div>
      <div className="header__side"  style={{ fontSize:'2.5vw'}}>
        <span className="header-side__item" style={{justifySelf: 'left',  fontSize:'2.5vw', marginLeft:'2vw', marginRight:'3vw'}} >Категория</span>
        <select name='category-selector' value={categoryValue} onChange={(e)=>setCategoryValue(e.target.value)} style={{ outline :'none', fontSize:'2.5vw',alignSelf:'center', width:'25vw'}}>
          {categories.map((item)=> <option  style={{ fontSize:'2.5vw'}} >{item}</option>)}
        </select>        
      </div>
      <Link to='basketcards' className="header-side__item" id='basket-link' style={{marginLeft:'2vw', marginRight:'3vw', padding:'0',fontSize:'1.5vw',border:'none', backgroundColor:'#ffffff',outlineColor:'#ffffff',backgroundSize:'100% 100%',alignSelf:'center', height:'5vw', width:'5vw', backgroundImage:"url('/4p22-final-project-levanyan-arthur/basketempty.png')"}}/>
    </div>
  
    <div className="tbl">
      <h1 style={{margin:'2vw 0vw 2vw 0vw',fontSize:'2.5vw'}}> Каталог товаров</h1>
        {goods
            .filter((item)=>new RegExp(searchValue, "i").test(item.title))
            .filter((item)=>(item.category===categoryValue)||(categoryValue==='all'))
            .map((item)=>
          {
            return <MyComponentCard key={item.id}
                                    id={item.id}
                                    image={item.image} 
                                    description={item.description} 
                                    title={item.title}
                                    price={item.price}/>
          })
        }
    </div>
  </>
)
};
