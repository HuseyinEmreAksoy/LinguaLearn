import React, { useRef, useState } from "react";
import Draggable from 'react-draggable';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, List, ListItem, ListItemButton } from "@mui/material";

function DraggableButton({screenSize}) {
    const buttonRef = useRef();
    const defaultPosition = {x:0, y:0};
    const [position, setPosition] = useState(defaultPosition);
    const [isOpen, setIsOpen] = useState(false);

    const isPositionInRange = (x, y) => {
        let position = buttonRef.current.getBoundingClientRect();
        let currentX = position.x, currentY = position.y;
        return (x < currentX + buttonRef.current.offsetWidth && x >= currentX &&
             y < currentY + buttonRef.current.offsetHeight && y >= currentY);
    }

    const handleClick = (event) => {
        if(isPositionInRange(event.clientX, event.clientY)) {
            console.log("opened");
            setIsOpen(!isOpen);
        }
        setPosition({x:event.clientX, y:event.clientY});
    }

    const mainButton = (
        <IconButton ref={buttonRef} color="secondary" onClick={handleClick}>
            <AddCircleIcon fontSize="large"></AddCircleIcon>
        </IconButton>
    );

    if(isOpen) {
        return(
            <Draggable bounds='parent' defaultPosition={position}>
                <div>
                    {mainButton}
                    <List class="w-32">
                        <ListItem class="bg-red-400">
                            <ListItemButton>Konuşma</ListItemButton>
                        </ListItem>
                        <ListItem class="bg-orange-400">
                            <ListItemButton>Okuma</ListItemButton>
                        </ListItem>
                        <ListItem class="bg-yellow-400">
                            <ListItemButton>Yazma</ListItemButton>
                        </ListItem>
                        <ListItem class="bg-lime-400">
                            <ListItemButton>Kelime Bilgisi</ListItemButton>
                        </ListItem>
                        <ListItem class="bg-cyan-400">
                            <ListItemButton>Dil Bilgisi</ListItemButton>
                        </ListItem>
                        <ListItem class="bg-purple-400">
                            <ListItemButton>Dinleme</ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </Draggable>
        );
    }
    else {
        return(
            <Draggable bounds='parent' defaultPosition={position}>
                {mainButton}
            </Draggable>
        );
    }
}

export default DraggableButton; 