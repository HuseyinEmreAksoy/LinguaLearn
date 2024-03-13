import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import Message from "../components/Message";
import FullPage from "../components/Helper/FullPage";
import TextInput from "../components/TextInput";
import DraggableButton from "../components/DraggableButton";
import axios from 'axios';

function GrammarPage() {
    const [chatHistory, setChatHistory] = useState([]);

    const addMessageToChatHistory = (text, type) => {
        setChatHistory(chatHistory => [...chatHistory, { type, content: text }]);
    };

    const sendMessage = (text) => {
        addMessageToChatHistory(text, 'message');
        grammerCheck(text);
    };

    const grammerCheck = async (text) => {
        try {
            const data = { prompt: text };
            const response = await axios.post('http://localhost:8080/chat', { prompt: text });
            addMessageToChatHistory(response.data, 'response');
        } catch (err) {
            console.error('Grammar check failed:', err);
            alert('Grammar check failed!');
        }
    };

    return (
        <FullPage class="bg-pomp_and_power-800">
            <DraggableButton></DraggableButton>
            <div class="h-5/6 float-bottom">
                <ChatBox class="w-7/12 h-4/6 mx-auto" chatHistory={chatHistory} />
                <TextInput send={sendMessage} class="w-7/12 mx-auto mt-3" />
            </div>
        </FullPage>
    );
}

export default GrammarPage;
