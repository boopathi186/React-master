import { Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";

const EditButton = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleClick = () => {
        setIsEnabled(!isEnabled);
        props.IsEnable();
        
        //enable the edit if true 
        if (!isEnabled) {
            Swal.fire({
                position: "top",
                title: "Enabled Edit!",
            });
        } else {
            Swal.fire({
                position: "top",
                title: "Disabled Edit!",
            });
        }
    };

    return (
        <>
            <Button variant='none' onClick={handleClick}>
            <i className="edit bi bi-pencil-square "></i> Edit
            </Button>
        </>
    );
};

export default EditButton;
