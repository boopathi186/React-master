import { Button } from "react-bootstrap";

import React, { MouseEventHandler } from "react";
interface CancelProps{
    
    clearInputField : MouseEventHandler<HTMLButtonElement>;
}
const Exit: React.FC <CancelProps> = (props) => {
    return (
        <>
            <Button id="button" variant='danger' onClick={props.clearInputField}>Clear</Button>
            </>
    );
}
export default Exit;