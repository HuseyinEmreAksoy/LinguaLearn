import { useState } from "react";
import ChatBox from "../components/ChatBox";
import { Button, TextField } from "@mui/material";
import Message from "../components/Message";
import Wrapper from "../components/Helper/Wrapper";

function GrammarPage() {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = (align) => {
        if(currentMessage === "") {
            return;
        }
        let messageComponent = (<Message text={currentMessage} align={align}></Message>);
        setMessages([...messages, messageComponent]);
        setCurrentMessage("");
    }

    return(
        <Wrapper>
            <ChatBox messages={messages}></ChatBox>
            <TextField value={currentMessage} fullWidth onChange={(event) => {setCurrentMessage(event.target.value)}}/>
            <Button onClick={() => {sendMessage("left")}}>Send Left</Button>
            <Button onClick={() => {sendMessage("right")}}>Send Right</Button>
            <Button onClick={() => {sendMessage("center")}}>Send Center</Button>
        </Wrapper>
    );
}

export default GrammarPage;