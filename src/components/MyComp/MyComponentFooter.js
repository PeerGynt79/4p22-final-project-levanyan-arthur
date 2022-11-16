import './MyComponentStyles.css';

function MyComponentFooter() {
    return (
        <footer className="hdr">
            <div style={{fontSize: '1.2em', textAlign: 'center'}}>
                <a href={"https://google.com"} target={"_blank"} rel={"nofollow noopener noreferrer"}> Google </a>
            </div>
        </footer>        
    )
}
export default MyComponentFooter;
