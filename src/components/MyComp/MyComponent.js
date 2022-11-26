import './MyComponentMain.css';

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
export default function MyComponentCard (props) {
    return (
        <div className="Card-main">
            {//<div className="Card-title">
            }    
                <img className="Card-pic" alt = {props.title} src={props.image}/>  
                <div className="divcenter">
                 <span className='Card-title__title'>{props.title}</span>
                 <button className="btn"> Buy for {props.price}$</button>   
                </div>
                <span className='Card-title__price Card-title__price_left'>{props.price}</span>
                <span className='Card-title__price Card-title__price_right'>Price</span>
            {//</div>
            } 
        </div> 
    )
};
