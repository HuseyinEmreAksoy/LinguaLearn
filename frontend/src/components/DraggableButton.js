import React, { useEffect, useRef, useState } from "react";
import Draggable from 'react-draggable';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { List, ListItem, ListItemButton } from "@mui/material";
import Wrapper from "./Helper/Wrapper";
import * as routes from "../constants/routePaths";
import { useNavigate } from "react-router-dom";

function DraggableButton({screenSize}) {
    const buttonRef = useRef();
    const defaultPosition = {x:0, y:0};
    const [position, setPosition] = useState(defaultPosition);
    const [isOpen, setIsOpen] = useState(false);
    const [listPosition, setListPosition] = useState(defaultPosition);

    const navigate = useNavigate();

    const getPosition = () => {
        let specs = buttonRef.current.getBoundingClientRect();
        return({x:specs.x, y:specs.y});
    }

    const isPositionInRange = () => {
        let currentPosition = getPosition();
        return (position.x < currentPosition.x + buttonRef.current.offsetWidth && position.x >= currentPosition.x &&
            position.y < currentPosition.y + buttonRef.current.offsetHeight && position.y >= currentPosition.y);
    }

    const handleClick = () => {
        if(isPositionInRange()) {
            setIsOpen(!isOpen);
            setListPosition({x:buttonRef.current.getBoundingClientRect().x + buttonRef.current.offsetWidth, y:buttonRef.current.getBoundingClientRect().y + buttonRef.current.offsetHeight/2});
        }
        setPosition(getPosition());
    }

    const handleStart = () => {
        setPosition(getPosition());
    }

    const handleDrag = () => {
        if(isOpen) {
           setListPosition({x:buttonRef.current.getBoundingClientRect().x + buttonRef.current.offsetWidth, y:buttonRef.current.getBoundingClientRect().y + buttonRef.current.offsetHeight/2});
        }
    }

    const close = (e) => {
        if (buttonRef.current && !buttonRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', close, true);   
        window.addEventListener('click', close);

        return () => {
            window.removeEventListener('click', close);
            window.removeEventListener('scroll', close, true);
        };
    }, []);

    return(
        <Wrapper>
            <Draggable bounds='parent' defaultPosition={position} onDrag={handleDrag} onStart={handleStart}>
                <IconButton ref={buttonRef} color="secondary" onClick={handleClick}>
                    <AddCircleIcon fontSize="large"></AddCircleIcon>
                </IconButton>
            </Draggable>
            {
                isOpen ?
                    <Wrapper>
                        <List class="w-32 z-[100]" style={{position:"absolute", left:listPosition.x, top:listPosition.y}}>
                            <ListItem class="bg-red-400 rounded-r-full" onClick={() => {navigate(routes.SPEAKING_PAGE_PATH);}}>
                                <ListItemButton><p class="text-white">Konuşma</p></ListItemButton>
                            </ListItem>
                            <ListItem class="bg-orange-400 rounded-r-full" onClick={() => {navigate(routes.READING_PAGE_PATH);}}>
                                <ListItemButton><p class="text-white">Okuma</p></ListItemButton>
                            </ListItem>
                            <ListItem class="bg-yellow-400 rounded-r-full" onClick={() => {navigate(routes.WRITING_PAGE_PATH);}}>
                                <ListItemButton><p class="text-white">Yazma</p></ListItemButton>
                            </ListItem>
                            <ListItem class="bg-lime-400 rounded-r-full" onClick={() => {navigate(routes.VOCABULARY_PAGE_PATH);}}>
                                <ListItemButton><p class="text-white">Kelime Bilgisi</p></ListItemButton>
                            </ListItem>
                            <ListItem class="bg-cyan-400 rounded-r-full" onClick={() => {navigate(routes.GRAMMAR_PAGE_PATH);}}>
                                <ListItemButton><p class="text-white">Dil Bilgisi</p></ListItemButton>
                            </ListItem>
                            <ListItem class="bg-purple-400 rounded-r-full" onClick={() => {navigate(routes.LISTENING_PAGE_PATH);}}>
                                <ListItemButton><p class="text-white">Dinleme</p></ListItemButton>
                            </ListItem>
                        </List>
                    </Wrapper>
                :
                    <></>
            }
        </Wrapper>
    );

}

export default DraggableButton; 