import './MyComponentMain.css';
import './MyComponentHeader.css';
export default function MyComponentLargeCard () {
    return (
    <>
    {
        /*
    <h1>{obj.Title}</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
        <img style={{width:'20vw', }} alt = {obj.title} src={obj.image}/>  
        <div style={{display:'flex',flexDirection:'column'}}>
            <span>Category</span><span>{obj.category}</span>
            <span>Desription</span><span>{obj.description}</span>
            <span>Price</span><span>{obj.price}</span>
            <span>Rating</span><span>{obj.rating.rate}</span>
            <span>Quantity</span><span>{obj.rating.count}</span>
        </div>
    </div>
       
        */

    }
    <h1>Наименование товара</h1>
    <div style={{display:'flex',flexDirection:'row'}}>
        <img style={{width:'20vw', }} alt = 'obj.title' src='/4p22-final-project-levanyan-arthur/uroboros.jpg'/>  
        <div style={{width:'50vw',display:'flex',flexDirection:'column'}}>
            <div style={{width:'50vw',paddingLeft:'5vw',paddingRight:'5vw', display:'flex',flexDirection:'row'}}><h3 style={{width:'20vw', textAlign:'left'}}>Категория:</h3><h3 style={{width:'20vw', textAlign:'left'}}>obj.category</h3></div>
            <div style={{width:'50vw',paddingLeft:'5vw',paddingRight:'5vw', display:'flex',flexDirection:'row'}}><h3 style={{width:'20vw', textAlign:'left'}}>Описание:</h3><h3 style={{width:'20vw', textAlign:'left'}}>obj.description</h3></div>
            <div style={{width:'50vw',paddingLeft:'5vw',paddingRight:'5vw', display:'flex',flexDirection:'row'}}><h3 style={{width:'20vw', textAlign:'left'}}>Популярность:</h3><h3 style={{width:'20vw', textAlign:'left'}}>obj.rating.rate</h3></div>
            <div style={{width:'50vw',paddingLeft:'5vw',paddingRight:'5vw', display:'flex',flexDirection:'row'}}><h3 style={{width:'20vw', textAlign:'left'}}>Количество:</h3><h3 style={{width:'20vw', textAlign:'left'}}>obj.rating.count</h3></div>
        </div>
    </div>
    </>
    )
};
