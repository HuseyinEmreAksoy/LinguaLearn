import { Button, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

const TextInput = (props) => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        props.send(message, "right");
        setMessage("");
    }

    return(
        <div class={"grid grid-cols-12 " + props.class}>
            <TextField size="small" value={message} onChange={(event) => {setMessage(event.target.value);}} fullWidth class="col-start-1 col-span-11" id="outlined-basic" variant="outlined"></TextField>
            <Button onClick={handleClick} disabled={message === ""} startIcon={<SendIcon></SendIcon>}>
                Send
            </Button>
        </div>
    );
}

export default TextInput;