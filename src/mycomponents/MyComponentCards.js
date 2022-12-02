import './MyComponentMain.css';
import MyComponentCard from './MyComponentCard';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'


export default function MyComponentCards () {
const [basketActive,setBasketActive] = useState(false)
const [searchValue,setSearchValue] = useState('');
const [categoryValue,setCategoryValue] = useState('all');
const [categories,setCategories] = useState([]);
const basket=useSelector((state)=>state.xbasket);
const [products] = useSelector((state) => [state.products.entities]);


useEffect( () => {
  setBasketActive(basket.reduce((accum, item) => accum + item, 0))
},[basket])

useEffect( () => {
            const newCategories = Array.from(new Set(products.map((item)=>item.category)))
            newCategories.unshift('all')
            setCategories(newCategories)
},[])

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
          {categories.map((item,idx)=> <option  key={idx} style={{ fontSize:'2.5vw'}} >{item}</option>)}
        </select>        
      </div>
            <Link to='basketcards' className={(basketActive)?'header-side__item basket-icon_full':'header-side__item basket-icon_empty'} id='basket-link'></Link>
    </div>
  
    <div className="tbl">
      <h1 style={{margin:'2vw 0vw 2vw 0vw',fontSize:'2.5vw'}}> Каталог товаров</h1>
        {products
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
