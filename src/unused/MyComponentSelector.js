import './MyComponentMain.css';
import MyComponentSelectorAddValue from '../mycomponents/MyComponentSelectorAddValue'
import { useEffect, useState} from 'react';

import axios from 'axios';

export default function MyComponentSelector() {
    const [categories,setCategories] = useState([]);
    useEffect( () => {
        axios.get('https://fakestoreapi.com/products')
        .then((result)=>{
                const newCategories = Array.from(new Set(result.data.map((item)=>item.category)))
                newCategories.unshift('all')
                setCategories(newCategories)
        })
    },[])
            
    
    return (
        <select name='category-selector' id='category-selector' style={{ outline :'none', fontSize:'2.5vw',alignSelf:'center', width:'25vw'}}>
        {categories.map((item, idx)=>{
        return <MyComponentSelectorAddValue key={idx}
                             val={item}
        />
        })
        }
        </select>        
)
};
