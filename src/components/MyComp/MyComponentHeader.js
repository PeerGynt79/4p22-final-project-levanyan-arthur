import './MyComponentStyles.css';

function MyComponentHeader() {
    return (
        <header>
        <h1 className="hdr">Чудесный магазин</h1>
        <nav className="nv tbl" style={{paddingTop:'10px', marginLeft: '0%', margin: '0%', rowGap: '10px'}}>
            <a className="cl-lime" href={"1.html"}>Личный кабинет клиента</a>
            <a className="cl-lime" href={"2.html"}>Информация о магазине</a>
            <a className="cl-lime" href={"3.html"}>Контакты</a>
        </nav>
        </header>

    )
}
export default MyComponentHeader;
