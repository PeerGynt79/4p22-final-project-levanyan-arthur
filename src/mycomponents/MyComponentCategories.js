import MyComponentCategorie from './MyComponentCategorie';
import './MyComponentMain.css';
import './MyComponentHeader.css';
import { useEffect, useState} from 'react';
import axios from 'axios';

export default function MyComponentCategories () {

        const [categories,setCategories] = useState([]);

        useEffect( () => {
            axios.get('https://fakestoreapi.com/products')
            .then((result)=>{
//not works v1
                setCategories(result.data.map((item)=>item.category).reduce((accum, item) =>
                    (accum.includes(item))?[...accum] :[...accum.push(...item)],['All']))
//not works v2
//                setCategories(result.data.map((item)=>item.category).reduce(function (accum, item) {
//                  if (accum.includes(item)){return [...accum]} else {return [...accum.push(item)]}; 
//                  }(), ['All']))
//works
//                setCategories(result.data.map((item)=>item.category))
})
        }, [])

        console.log(categories);
    
        //console.log(listcat)
        return (
        <div className="Categories" style={{width:'20%',paddingLeft:'1vw', fontSize:'3vh', display:'flex', flexDirection:'column'}}>
        <h1 className="Categories-title"style={{fontSize:'5vh'}}> Categories</h1>
        {
        //console.log(categories);
    
        categories.map((item, index)=>{
            return <MyComponentCategorie    //key = {item.id}
                                            key={index} 
                                            //categorie={item.category}/>
                                            categorie={item}/> 
                                        })
        }  
        </div>
)
};
