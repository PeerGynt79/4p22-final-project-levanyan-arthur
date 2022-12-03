import './styles.css';
import {accessGranted, accessDenied} from "../store/access/accessSlice"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authDenied,authGranted } from '../store/access/authSlice';

export default function MyComponentEntry (){
    const dispatch=useDispatch();
    const accessState=useSelector((state) => state.access)
    const [authLogin,setAuthLogin] = useState(false)
    const [authPassword,setAuthPassword] = useState(false)
    const [auth,setAuth] = useState(false)

    const loginInput = (e)=>{
            if ((e.target.value==='login')&&authPassword){
                dispatch(accessGranted())
            } else {
                dispatch(accessDenied())
            }
            setAuthLogin(e.target.value==='login');
        }
    const loginPassword = (e)=>{
            if ((e.target.value==='password')&&authLogin){
                dispatch(accessGranted())
            } else {
                dispatch(accessDenied())
            }
            setAuthPassword(e.target.value==='password');
        }

    useEffect(()=>{setAuth(accessState)},[accessState])

    const accessControl = ()=>{
            if (auth === true) {dispatch(authGranted())} else {dispatch(authDenied())};
        }
    return (
    <main className="main"  >
        <form className="main__form main__form_entrance" >
            <p className="main-form__caption main-form__caption_big">Вход</p>
            <label className="main-form__label main-form__label_entrance" htmlFor="email">Логин</label>
            <input className="main-form__input" id="email" name="email" type="email" placeholder="Введите login" onChange={loginInput}/>
            <label className="main-form__label main-form__label_entrance" >Пароль</label>
            <input className="main-form__input" id="password" name="password" type="password" placeholder="Введите password" onChange={loginPassword} htmlFor="password"/>
            <Link className="main-form__button main-form__button_registration common__button" onClick={accessControl} to="/">Войти</Link>      
        </form>
    </main>
    )
}
