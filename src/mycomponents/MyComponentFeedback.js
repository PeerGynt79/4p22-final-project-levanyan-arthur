import './MyComponentMain2.css';
import './MyComponentMain.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MyComponentFeedback (){
 const [mailValue,setMailValue]=useState('');
 const [nameValue,setNameValue]=useState('');
 const [textValue,setTextValue]=useState('');

 const [mailAlert,setMailAlert]=useState('hidden');
 const [nameAlert,setNameAlert]=useState('hidden');
 const [textAlert,setTextAlert]=useState('hidden');

 useEffect(()=>{
        const mask = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log('useffect');

        if ((String(mailValue) === '')||(!(mask.test(String(mailValue).toLowerCase())))){
            setMailAlert('visible');
        } else setMailAlert('hidden');
 
        if ((String(nameValue) === '')||(String(nameValue).length<2)){
            setMailAlert('visible');
        } else setNameAlert('hidden');

        if ((String(textValue) === '')||(String(textValue).length<50)){
            setMailAlert('visible');
        } else setTextAlert('hidden');

 }, [mailValue,textValue,nameValue])


    return (
    <main className="main"  >
        <form className="main__form main__form_registration">
            <p className="main-form__caption main-form__caption_big">Обратная связь</p>
            <div className="main-form__label-div">
                <label className="main-form__label main-form__label_registration main-form__label-registration_left " htmlFor="email">* Email</label>
                <label className="main-form__label main-form__label_registration  main-form__label-registration_right" htmlFor="email" id="email-attention" style={{visibility:{mailAlert}}}>Поле обязательно для заполнения</label>
            </div>
            <input className="main-form__input" value={mailValue} id="email" name="email" type="email" placeholder="Введите email" onChange={(e)=>setMailValue(e.target.value)}/>
            <div className="main-form__label-div">
                <label className="main-form__label main-form__label_registration main-form__label-registration_left " htmlFor="email">* Имя</label>
                <label className="main-form__label main-form__label_registration  main-form__label-registration_right" htmlFor="email" id="email-attention" style={{visibility:{nameAlert}}}>Имя обязательно для заполнения</label>
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
            <label className="main-form__label main-form__label_registration  main-form__label-registration_right" htmlFor="textarea" id="textarea-attention" style={{visibility:{textAlert}}}>Блок обязателен для заполнения</label>
            <textarea className="main-form__textarea" value={textValue} id="selfabout" name="selfabout" type="password" placeholder="Опишите кратко проблему. Текст обращения должен содержать не менее 50 символов..."  onChange={(e)=>setTextValue(e.target.value)}></textarea>
            <div className="main-form__checkbox">
                <input id="checkbox" name="subscribe" type="checkbox" value="true"/>
                <label className="main-form__label_checkbox" htmlFor="checkbox">Я согласен получать обновления на почту</label>
            </div>
            <Link className="main-form__button main-form__button_registration btn" to="/feedbackdone">Отправить</Link>      
        </form>
    </main>
    )
}