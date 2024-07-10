import { Button } from "react-bootstrap";
import '../Css/Save.css'
const Exit = (props) => {
    return (
        <>
            <Button id="button" variant='danger' onClick={() => {
                alert("Exit page ");
               document.querySelectorAll("#form input").forEach(function(input){

                    input.diabled=true;
               });
            
            }}>Cancel</Button>
            </>
    );
}
export default Exit;