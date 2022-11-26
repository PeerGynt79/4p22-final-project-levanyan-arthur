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
export default function MyComponentBasketCard (props) {
    return (
        <div className="Card-main">
            {//<div className="Card-title">
            }    
                <img className="Card-pic" alt = {props.title} src={props.image}/>  
                <div className="divcenter">
                <span className='Card-title__title'>{props.title}</span>
                <div style={{width:'20vw',paddingLeft:'5vw',paddingRight:'5vw', display:'flex',flexDirection:'row'}}>
                <button className="btn Card-title__price_left"> - </button>
                <button  className="btn"> 99 </button>
                <button  className="btn Card-title__price_right"> + </button>
                <button  className="btn"> Удалить </button>
                </div>
                </div>
    
            {//</div>
            } 
        </div> 
    )
};
