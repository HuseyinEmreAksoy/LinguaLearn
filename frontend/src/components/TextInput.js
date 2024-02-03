import { IconButton, TextField } from "@mui/material";
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
            <TextField value={message} onChange={(event) => {setMessage(event.target.value);}} fullWidth class="col-start-1 col-span-11" id="outlined-basic" variant="outlined"></TextField>
            <IconButton onClick={handleClick} disabled={message === ""}>
                <SendIcon class="col-start-6" fontSize="large"></SendIcon>
            </IconButton>
        </div>
    );
}

export default TextInput;