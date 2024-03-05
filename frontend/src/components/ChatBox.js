import React from 'react';
import { Paper } from '@mui/material';

function ChatBox(props) {
    return (
        <div class={"overflow-y-scroll bg-pale_purple " + props.class}>
            <div className="flex flex-col gap-2 p-3">
                {props.chatHistory.map((entry, index) => (
                    <>
                        {entry.type === 'message' ?
                            <Paper key={index} elevation={3} className={`p-2 rounded-lg max-w-xs ${entry.type === 'message' ? 'bg-white self-end' : 'bg-pink-100 self-start'}`}>
                                {entry.content}
                            </Paper>
                            :
                            entry.content.map((message, index) =>
                                <Paper key={index} elevation={3} className={`p-2 rounded-lg max-w-xs ${entry.type === 'message' ? 'bg-white self-end' : 'bg-pink-100 self-start'}`}>
                                    <p key={index}>{message}</p>
                                </Paper>
                            )

                        }
                    </>


                ))}
            </div>
        </div>
    );
}

export default ChatBox;
