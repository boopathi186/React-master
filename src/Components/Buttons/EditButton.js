import { Button } from "react-bootstrap";
import edit from '../Assets/Edit.png';
const EditButton = () => {

    return (
        <>
            <Button variant='none' onClick={() => {
                alert("You can edit the page now!");
                document.querySelectorAll("#forms input").forEach(function (input) {
                    input.disabled = false;
                });
            }
            }
            ><img src={edit} width={15} height={15} alt="edit_img"></img> Edit</Button>
        </>
    );
}
export default EditButton;