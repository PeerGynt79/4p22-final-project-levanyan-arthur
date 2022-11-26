import MyComponentCard from './MyComponentCard';
import './MyComponentMain.css';
import './MyComponentHeader.css';
import { useEffect, useState} from 'react';

import axios from 'axios';

export default function MyComponentCards () {

        const [inSearch,inCategory]=['OLD',''];//эти два параметра нужно получать, но пока я их задал в виде констант
        let rxSearch = new RegExp(inSearch, "i");
        let rxCategory = new RegExp(inCategory, "i");
        let rxSearchZero = new RegExp('.*', "i");
        let rxCategoryZero = new RegExp('.*', "i");
        let inCategoryVal = (inCategory==='')?rxCategoryZero:rxCategory;
        let inSearchVal = (inSearch==='')?rxSearchZero:rxSearch;

        const [goods,setGoods] = useState([]);

        useEffect( () => {
            axios.get('https://fakestoreapi.com/products')
            .then((result)=>{
                setGoods(result.data.filter(item => inCategoryVal.test(item.category) && inSearchVal.test(item.title)))
            })
        }, []);

        return (

        <div className="tbl">
        {goods.map((item)=>
            {
            return <MyComponentCard key={Number(item.id)}
                                image={item.image} 
                                description={item.description} 
                                title={item.title}
                                price={item.price}/>
            })
        }
        
        </div>

)
};
