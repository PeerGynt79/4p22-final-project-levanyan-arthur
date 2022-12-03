import './styles.css';


function MyComponentHeader() {
    return (
        <div className="header" >
            <div className="header-side__heading" style={{display:'flex',flexDirection:'column', width:'100%', alignContent:'flex-start'}}>
                <h1 className="header-side__heading"  style={{width:'100%',fontSize: '3vw',margin:'0'}}>Cmall</h1>
                <h3 className="header-side__heading" style={{width:'100%',margin:'0',fontSize: '2vw'}}>Chosen's mall. Будь избранным! Обладай всем!</h3>
            </div>
        </div>

    )
}
export default MyComponentHeader;
