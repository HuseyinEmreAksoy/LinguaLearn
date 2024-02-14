import { Button, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, keyDownHandler } from "react";

const TextInput = (props) => {
    const [message, setMessage] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const handleClick = () => {
        if(message !== "") {
            props.send(message, "right");
            setMessage("");
        }
    }

    const handleEnter = () => {
        if(isFocus) {
            handleClick();
        }
    }

    // Listens keys
    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleEnter();
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

    return(
        <div class={"grid grid-cols-12 " + props.class}>
            <TextField 
            onFocus={() => {setIsFocus(true);}}
            onBlur={() => {setIsFocus(false);}}
            size="small" 
            value={message} 
            onChange={(event) => {setMessage(event.target.value);}} 
            fullWidth 
            multiline
            maxRows={3}
            class="col-start-1 col-span-11" id="outlined-basic" 
            variant="outlined" />
            <div>
                <Button onClick={handleClick} disabled={message === ""} startIcon={<SendIcon></SendIcon>}>Send</Button>
            </div>
        </div>
    );
}

export default TextInput;