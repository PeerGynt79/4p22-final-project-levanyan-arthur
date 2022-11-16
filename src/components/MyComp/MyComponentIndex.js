import MyComponentHeader from './MyComponentHeader';
import MyComponentFooter from './MyComponentFooter';
import MyComponentCard1,  {MyComponentCard2, MyComponentCard3,MyComponentCard4} from './MyComponentCard';
import './MyComponentStyles.css';
function MyComponentIndex (){
    return (
        <div>
        <MyComponentHeader/>    
        <main>
            <div className="tbl">
            <MyComponentCard1/>
            <MyComponentCard2/>
            <MyComponentCard3/>
            <MyComponentCard4/>
            </div>
        </main>
        <hr style={{marginBottom: '0px'}} />
        <MyComponentFooter/>
    </div>
    )
}
export default MyComponentIndex;
