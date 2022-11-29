import './MyComponentHeader.css';
import MyComponentSelector from './MyComponentSelector';
import { Link } from 'react-router-dom';
//import { useSelector} from 'react-redux';

function MyComponentDataManipulation() {

    return (
    <div className="header" style={{backgroundColor:'white',zIndex:'10',position:"sticky", top:'0px'}}>
        <div className="header__side">
            <span className="header-side__item" style={{justifySelf: 'left',fontSize:'2.5vw', marginLeft:'2vw', marginRight:'3vw'}} >Поиск</span>
            <input className="header-side__item" id='search-field' defaultValue={''} style={{outline :'none',fontSize:'2.5vw',alignSelf:'center', width:'25vw'}}></input>
        </div>
        <div className="header__side"  style={{ fontSize:'2.5vw'}}>
        <span className="header-side__item" style={{justifySelf: 'left',  fontSize:'2.5vw', marginLeft:'2vw', marginRight:'3vw'}} >Категория</span>
        <MyComponentSelector/>

        </div>
        <button className="header-side__item" style={{margin:'0', padding:'0',border:'none',fontSize:'1.5vw', justifySelf: 'left', backgroundColor:'#ffffff',outlineColor:'#ffffff',backgroundSize:'100% 100%',alignSelf:'center', height:'3.5vw', width:'3.5vw', backgroundImage:"url('/4p22-final-project-levanyan-arthur/find.png')" }} onClick={()=><Link to='main'/>}/>
        <button className="header-side__item" style={{marginLeft:'2vw', marginRight:'3vw', padding:'0',fontSize:'1.5vw',border:'none', backgroundColor:'#ffffff',outlineColor:'#ffffff',backgroundSize:'100% 100%',alignSelf:'center', height:'5vw', width:'5vw', backgroundImage:"url('/4p22-final-project-levanyan-arthur/basketempty.png')"}} onClick={()=><Link to='main'/>}/>
    </div>


    )
}
export default MyComponentDataManipulation;
