import { Button } from "react-bootstrap";
import edit from '../Assets/Edit.png';
import { useState } from "react";
import Swal from "sweetalert2";
const EditButton = (props) => {
    const[toggle,setToggle] = useState(false);
    const handleClick = () => {
        setToggle(toggle)
        props.IsEnable();
        if(toggle === false ){
       Swal.fire({
        position: "top",
        title: "Enabled Edit!",
        
      })
    }
    }
    return (
        <>
            <Button variant='none' onClick={handleClick}
            ><img src={edit} width={15} height={15} alt="edit_img"></img> Edit</Button>
        </>
    );
}
export default EditButton;