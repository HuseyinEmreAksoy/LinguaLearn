import { useState } from "react";
import ChatBox from "../components/ChatBox";
import { Button } from "@mui/material";
import Message from "../components/Message";
import Wrapper from "../components/Helper/Wrapper";

function GrammarPage() {
    const [messages, setMessages] = useState([]);

    const sendMessage = (text, align) => {
        let messageComponent = (<Message text={text} align={align}></Message>);
        setMessages([...messages, messageComponent]);
    }

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum fringilla enim, eget mollis diam porta non. Donec ultrices eleifend malesuada. Maecenas id facilisis ex. Donec hendrerit eros id nunc venenatis, vestibulum pellentesque nibh vulputate. Donec pulvinar urna sit amet ipsum commodo ornare. Pellentesque vitae urna ac elit blandit blandit. Nunc pellentesque sagittis ultricies. Praesent mattis egestas turpis at efficitur. Nulla eget leo nibh. Proin eleifend eleifend magna in porttitor.";

    return(
        <Wrapper>
            <ChatBox messages={messages}></ChatBox>
            <Button onClick={() => {sendMessage(text, "left")}}>Send Left</Button>
            <Button onClick={() => {sendMessage(text, "right")}}>Send Right</Button>
        </Wrapper>
    );
}

export default GrammarPage;