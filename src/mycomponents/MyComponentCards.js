import MyComponentCard from './MyComponentCard';
import './MyComponentMain.css';
import { useEffect, useState} from 'react';
import MyComponentSelector from './MyComponentSelector';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MyComponentCards () {
const [goods,setGoods] = useState([]);
useEffect( () => {
  axios.get('https://fakestoreapi.com/products')
  .then((result)=>{
    const [inSearch,inCategory]=[String(document.getElementById('search-field').value),String(document.getElementById('category-selector').options[document.getElementById('category-selector').selectedIndex].text)];//эти два параметра нужно получать, но пока я их задал в виде констант
    const [inCategoryVal,inSearchVal] = [inCategory,inSearch]
    if (inCategory==='all')
    {setGoods(result.data.filter(item => item.title.includes(inSearchVal)))
    } else {
    setGoods(result.data.filter(item => (inCategoryVal===item.category) && item.title.includes(inSearchVal)))  
    }
  })
}, [goods]);
return (
  <>
    <div className="header" style={{backgroundColor:'white',zIndex:'10',position:"sticky", top:'0px'}}>
      <div className="header__side">
        <span className="header-side__item" style={{justifySelf: 'left',fontSize:'2.5vw', marginLeft:'2vw', marginRight:'3vw'}} >Поиск</span>
        <input className="header-side__item" id='search-field' style={{outline :'none',fontSize:'2.5vw',alignSelf:'center', width:'25vw'}}></input>
      </div>
      <div className="header__side"  style={{ fontSize:'2.5vw'}}>
        <span className="header-side__item" style={{justifySelf: 'left',  fontSize:'2.5vw', marginLeft:'2vw', marginRight:'3vw'}} >Категория</span>
        <MyComponentSelector/>
      </div>
      <Link to='basketcards' className="header-side__item" id='basket-link' style={{marginLeft:'2vw', marginRight:'3vw', padding:'0',fontSize:'1.5vw',border:'none', backgroundColor:'#ffffff',outlineColor:'#ffffff',backgroundSize:'100% 100%',alignSelf:'center', height:'5vw', width:'5vw', backgroundImage:"url('/4p22-final-project-levanyan-arthur/basketempty.png')"}}/>
    </div>
  
    <div className="tbl">
      <h1 style={{margin:'2vw 0vw 2vw 0vw',fontSize:'2.5vw'}}> Каталог товаров</h1>
        {goods.map((item)=>
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
