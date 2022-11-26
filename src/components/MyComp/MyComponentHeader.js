import './MyComponentHeader.css';


function MyComponentHeader() {
    return (
        <div className="header" >
                <img className="header-side__logo" alt="logo_innopolis" src="/4p22-final-project-levanyan-arthur/logoinnopolis.png" />
                <div className="header-side__heading" style={{display:'flex',flexDirection:'column'}}>
                    <h1 className="header-side__heading"  style={{width:'100%',margin:'0'}}>Cmall</h1>
                    <h3 className="header-side__heading" style={{width:'100%',margin:'0',fontSize: '2vh'}}>Chosen's mall. Будь избранным! Обладай всем!</h3>
                </div>
                <a className="header-side__item header-side__item_entrance" href="entry.html">Вход</a>
        </div>

    )
}
export default MyComponentHeader;
