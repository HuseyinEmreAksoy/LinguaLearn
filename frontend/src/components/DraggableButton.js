import React, { useState } from "react";
import Draggable from 'react-draggable';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function DraggableButton({screenSize}) {
    return(
        <Draggable bounds='parent' defaultPosition={{x:0, y:0}}>
            <IconButton color="secondary">
                <AddCircleIcon fontSize="large"></AddCircleIcon>
            </IconButton>
        </Draggable>
    );
}

export default DraggableButton; 