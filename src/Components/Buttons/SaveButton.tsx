import { Button } from "react-bootstrap";
import '../Css/Save.css';
import React, { MouseEventHandler } from "react";
interface ButtonType
{
    saveData: MouseEventHandler<HTMLButtonElement> ;
    
}
const Save = (props: ButtonType) => {
    return (
        <>
            <Button  variant="primary m-2" id="button" onClick={props.saveData} >Save</Button>
        </>
    );
}
export default Save;