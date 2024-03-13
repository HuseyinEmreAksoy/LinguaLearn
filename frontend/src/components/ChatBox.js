import React from 'react';
import { Paper } from '@mui/material';

function ChatBox(props) {
    return (
        <div className={"overflow-y-scroll bg-pale_purple " + props.class}>
            <div className="flex flex-col gap-2 p-3">
                {props.chatHistory.map((entry, index) => (
                    <Paper key={index} elevation={3} className={`p-2 rounded-lg max-w-xs ${entry.type === 'message' ? 'bg-white self-end' : 'bg-pink-100 self-start'}`}>
                        {entry.content.split('\n').map((line, lineIndex) => (
                            <p key={lineIndex}>{line}</p>
                        ))}
                    </Paper>
                ))}
            </div>
        </div>
    );
}

export default ChatBox;
