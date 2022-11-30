import { Link } from 'react-router-dom';
import './MyComponentMain.css';

function MyComponentFooter() {
    return (
        <footer className="hdr">
            <div style={{fontSize:'2vw', textAlign: 'center',display:'flex',flexDirection:'row',justifyContent: 'space-evenly'}}>
                <Link to = {'entry'}>Вход</Link>
                <Link to = {'/'}>Каталог</Link>
                <Link to = {'feedback'}>Обратная связь</Link>
                <Link to = {'basketcards'}>Корзина</Link>
            </div>
        </footer>        
    )
}
export default MyComponentFooter;
