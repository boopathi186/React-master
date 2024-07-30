import { Button } from "react-bootstrap";
import '../Css/Save.css';
const Save = (props) => {
    return (
        <>
            <Button variant="primary m-2" id="button" onClick={props.saveData} >Save</Button>
        </>
    );
}
export default Save;