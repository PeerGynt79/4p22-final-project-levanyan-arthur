import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { accessDenied } from '../store/access/accessSlice';
import { authDenied } from '../store/access/authSlice';
import './styles.css';



function MyComponentFooter() {
    const dispatch=useDispatch();
    const authState=useSelector((state) => state.auth)
    const denyAccess = ()=>{
            dispatch(accessDenied());
            dispatch(authDenied())
        }
    
    return (
        <footer className="hdr" style={{height:'10vw' }} >
            <div style={{fontSize:'2vw', textAlign: 'center',display:'flex',flexDirection:'row',justifyContent: 'space-evenly'}}>
                <Link to = {'entry'} onClick={denyAccess} >{authState?'Выход':'Вход'}</Link>
                <Link to = {'/'}>Каталог</Link>
                <Link to = {'feedback'}>Обратная связь</Link>
                <Link to = {'basketcards'}>Корзина</Link>
            </div>
        </footer>        
    )
}
export default MyComponentFooter;
