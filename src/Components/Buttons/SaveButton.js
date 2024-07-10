import { Button } from "react-bootstrap";
import '../Css/Save.css';
const Save = () => {
    return (
        <>
            <Button variant="primary" id="button" onClick={() => {
                alert("Saved Successfully..");
                document.querySelectorAll("#forms input").forEach(function (input) {
                    input.disabled = true;
                    
                });
            }
            }>Save</Button>
        </>
    );
}
export default Save;