import { Button } from "react-bootstrap";
import edit from '../Assets/Edit.png';
import { useState } from "react";
const EditButton = (props) => {
    const[toggle,setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle)
        props.IsEnable();
        if(toggle === true){
        alert("You can Edit the page now !");}
    }
    return (
        <>
            <Button variant='none' onClick={handleClick}
            ><img src={edit} width={15} height={15} alt="edit_img"></img> Edit</Button>
        </>
    );
}
export default EditButton;