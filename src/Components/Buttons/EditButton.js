import { Button } from "react-bootstrap";
import edit from '../Assets/Edit.png';
const EditButton = (props) => {
    return (
        <>
            <Button variant='none' onClick={props.IsEnable}
            ><img src={edit} width={15} height={15} alt="edit_img"></img> Edit</Button>
        </>
    );
}
export default EditButton;