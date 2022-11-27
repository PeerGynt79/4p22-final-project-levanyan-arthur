import './MyComponentHeader.css';
import MyComponentSelector from './MyComponentSelector';


function MyComponentDataManipulation() {
    return (
        <div className="header">
        <div className="header__side">
            <span className="header-side__item" style={{justifySelf: 'left', marginRight:'1vw'}} >Поиск</span>
            <input className="header-side__item" defaultValue={'OLD'} style={{alignSelf:'center', width:'35vw'}}></input>
        </div>
        <div className="header__side">
            <span className="header-side__item" style={{justifySelf: 'left', marginRight:'1vw'}} >Категория</span>
        <MyComponentSelector/>

        </div>
        <button className="header-side__item" style={{alignSelf:'center', width:'7%'}}> F </button>
    </div>


    )
}
export default MyComponentDataManipulation;
