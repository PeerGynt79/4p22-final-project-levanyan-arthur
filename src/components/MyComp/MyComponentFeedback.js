import './MyComponentMain2.css';
import './MyComponentMain.css';
export default function MyComponentFeedback (){
    return (
    <main className="main"  >
        <form className="main__form main__form_registration">
            <p className="main-form__caption main-form__caption_big">Обратная связь</p>
            <div className="main-form__label-div">
                <label className="main-form__label main-form__label_registration main-form__label-registration_left " htmlFor="email">* Email</label>
                <label className="main-form__label main-form__label_registration  main-form__label-registration_right" htmlFor="email" id="email-attention">Поле обязательно для заполнения</label>
            </div>
            <input className="main-form__input" id="email" name="email" type="email" placeholder="Введите email"/>
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
            <textarea className="main-form__textarea" id="selfabout" name="selfabout" type="password" placeholder="Опишите кратко проблему. Текст обращения должен содержать не менее 50 символов..."></textarea>
            <div className="main-form__checkbox">
                <input id="checkbox" name="subscribe" type="checkbox" value="true"/>
                <label className="main-form__label_checkbox" htmlFor="checkbox">Я согласен получать обновления на почту</label>
            </div>
            <button className="main-form__button main-form__button_registration btn" id="registration_button" type="submit">Отправить</button>
            
        </form>
    </main>
    )
}