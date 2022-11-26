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
                setCategories(result.data) 
            })
        }, [])
    
        //console.log(listcat)
        return (
        
        <div className="Categories" style={{width:'20%',paddingLeft:'1vw', fontSize:'3vh', display:'flex', flexDirection:'column'}}>
        <h1 className="Categories-title"style={{fontSize:'5vh'}}> Categories</h1>
        {
        categories.map((item)=>{
        return <MyComponentCategorie key={item.id}
                                categorie={item.category}/>
        })
        }    
        </div>
)
};
