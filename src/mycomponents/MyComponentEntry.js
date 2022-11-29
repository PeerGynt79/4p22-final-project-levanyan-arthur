
import './MyComponentMain2.css';
import './MyComponentMain.css';
import { Link } from 'react-router-dom';

export default function MyComponentEntry (){
    return (
    <main className="main"  >
        <form className="main__form main__form_entrance">
            <p className="main-form__caption main-form__caption_big">Вход</p>
            <label className="main-form__label main-form__label_entrance" htmlFor="email">Email</label>
            <input className="main-form__input" id="email" name="email" type="email" placeholder="Введите email"/>
            <label className="main-form__label main-form__label_entrance" htmlFor="password">Пароль</label>
            <input className="main-form__input" id="password" name="password" type="password" placeholder="Введите пароль"/>
            {
            //<button className="main-form__button main-form__button_entrance btn" type="submit" >Войти</button>
            <Link className="main-form__button main-form__button_registration btn" to="/">Отправить</Link>      
            }
        </form>
    </main>
    )
}
