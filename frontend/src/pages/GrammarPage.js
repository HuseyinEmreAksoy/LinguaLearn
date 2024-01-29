import { useState } from "react";
import ChatBox from "../components/ChatBox";
import { Button, TextField } from "@mui/material";
import Message from "../components/Message";
import Wrapper from "../components/Helper/Wrapper";
import useScreenSize from "../hooks/useScreenSize";
import FullPage from "../components/Helper/FullPage";
import TextInput from "../components/TextInput";
import DraggableButton from "../components/DraggableButton";

function GrammarPage() {
    const [messages, setMessages] = useState([]);

    const sendMessage = (text, align) => {
        let messageComponent = (<Message text={text} align={align}></Message>);
        setMessages([...messages, messageComponent]);
    }

    return(
        <FullPage class="bg-pomp_and_power-800">
            <ChatBox class="w-4/6 h-5/6 mx-auto" messages={messages}></ChatBox>
            <TextInput send={sendMessage} class="w-4/6 mx-auto"></TextInput>
            <DraggableButton></DraggableButton>
        </FullPage>
    );
}

export default GrammarPage;