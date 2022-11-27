import './MyComponentMain.css';
import MyComponentSelectorAddValue from './MyComponentSelectorAddValue'
import { useEffect, useState} from 'react';

import axios from 'axios';
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
export default function MyComponentSelector() {
    const [categories,setCategories] = useState([]);
    useEffect( () => {
        axios.get('https://fakestoreapi.com/products')
        .then((result)=>{
    //not works v1
//            setCategories(result.data.map((item)=>item.category).reduce((accum, item,index) =>
//works [All]
//                (accum.includes(item))?[accum] :[accum],["All"]))
//NOT WORKS!!!
//not works v1
//   (accum.includes(item))?accum:accum.push(item),['All']))
//not works v2
                 setCategories(result.data.map((item)=>item.category).reduce(function (accum, item) {
                  if (accum.includes(item)){return accum} else {return accum.push(item)};} 
                , ["All"]))
    })
    }, [])
    
    return (
        <select className="header-side__item" name='category-selector' id='category_selector' style={{alignSelf:'center', width:'35vw'}}>
        {categories.map((item, idx)=>{
        return <MyComponentSelectorAddValue key={idx}
                             val={item}
        />
        })
        }
        </select>        
)
};
