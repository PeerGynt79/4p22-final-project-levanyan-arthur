import './MyComponentMain2.css';
import './MyComponentMain.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MyComponentFeedback (){
 const [mailValue,setMailValue]=useState('');
 const [nameValue,setNameValue]=useState('');
 const [textValue,setTextValue]=useState('');

 const [mailAlert,setMailAlert]=useState('alert');
 const [nameAlert,setNameAlert]=useState('alert');
 const [textAlert,setTextAlert]=useState('alert');

 const clickFeedback = (e)=>{
    if (mailAlert+nameAlert+textAlert) {
        e.preventDefault();
    } else {
        console.log({Email: mailValue, Name: nameValue, Message:textValue});
    }
 }
 
 const clickMailValue = (e)=>{

    setMailValue(e.target.value)    }
const clickTextValue = (e)=>{
        setTextValue(e.target.value)    }
     
useEffect(()=>{
        const mask = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (String(mailValue) === ''){
            setMailAlert('Поле обязательно для заполнения')
            } else if (!(mask.test(String(mailValue).toLowerCase()))){
            setMailAlert('Email введён некорректно');
            } else setMailAlert('');
 
        if (String(nameValue) === ''){
            setNameAlert('Поле обязательно для заполнения')
        }else if (String(nameValue).length<2){
            setNameAlert('Слишком короткое имя')
        } else setNameAlert('');

        if (String(textValue) === ''){
            setTextAlert('Поле обязательно для заполнения')
        } else if (String(textValue).length<50) {
            setTextAlert('Сообщение слишком короткое')
        } else setTextAlert('');

 }, [mailValue,textValue,nameValue])


    return (
    <main className="main"  >
        <form className="main__form main__form_registration">
            <p className="main-form__caption main-form__caption_big">Обратная связь</p>
            <div className="main-form__label-div">
                <label className="main-form__label main-form__label_registration main-form__label-registration_left " htmlFor="email">* Email</label>
                <label className="main-form__label main-form__label_registration  main-form__label-registration_right" htmlFor="email" id="email-attention">{mailAlert} </label>
            </div>
            <input className="main-form__input" value={mailValue} id="email" name="email" type="email" placeholder="Введите email" onChange={clickMailValue}/>
            <div className="main-form__label-div">
                <label className="main-form__label main-form__label_registration main-form__label-registration_left " htmlFor="email">* Имя</label>
                <label className="main-form__label main-form__label_registration  main-form__label-registration_right" htmlFor="email" id="email-attention"> {nameAlert} </label>
            </div>
            <input className="main-form__input"  value={nameValue} id="name" name="name" placeholder="Введите имя"  onChange={(e)=>setNameValue(e.target.value)}/>
            <p className="main-form__caption main-form__caption_small">Пол</p>
            <div className="main-form__radiogroup">
                <div className="main-form__radioitem"  id="margin9">
                    <input id="radio1" type="radio" name="gender" value="male" defaultChecked/>
                    <label className="main-form__label_radio" htmlFor="radio1"> Муж.</label> 
                </div>
                <div className="main-form__radioitem">
                    <input id="radio2" type="radio" name="gender" value="female"/>
                    <label className="main-form__label_radio" htmlFor="radio2"> Жен.</label>
                </div>
            </div>
            <p className="main-form__caption main-form__caption_small" htmlFor="selfabout">Текст обращения</p>
            <label className="main-form__label main-form__label_registration  main-form__label-registration_right" htmlFor="textarea" id="textarea-attention">{textAlert}</label>
            <textarea className="main-form__textarea" value={textValue} id="selfabout" name="selfabout" type="password" placeholder="Опишите кратко проблему. Текст обращения должен содержать не менее 50 символов..."  onChange={clickTextValue}></textarea>
            <div className="main-form__checkbox">
                <input id="checkbox" name="subscribe" type="checkbox" value="true"/>
                <label className="main-form__label_checkbox" htmlFor="checkbox">Я согласен получать обновления на почту</label>
            </div>
            <Link className="main-form__button main-form__button_registration btn" onClick={clickFeedback} to="/feedbackdone">Отправить</Link>      
        </form>
    </main>
    )
}