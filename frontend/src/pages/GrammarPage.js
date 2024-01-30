import { useState } from "react";
import ChatBox from "../components/ChatBox";
import Message from "../components/Message";
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
            <DraggableButton></DraggableButton>
            <div class="h-5/6 float-bottom">
                <ChatBox class="w-7/12 h-4/6 mx-auto" messages={messages}></ChatBox>
                <TextInput send={sendMessage} class="w-7/12 mx-auto mt-3"></TextInput>
            </div>
        </FullPage>
    );
}

export default GrammarPage;