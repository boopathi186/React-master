import { Button } from "react-bootstrap";
import '../Css/Save.css'
const Exit = (props) => {
    return (
        <>
            <Button id="button" variant='danger' onClick={props.clearInputField}>Clear</Button>
            </>
    );
}
export default Exit;