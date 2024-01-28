import Message from "./Message";

function ChatBox(props) {
    return(
        <div class="w-4/6 h-5/6 overflow-y-scroll justify-start grid grid-cols-6 bg-pale_purple">
            {props.messages}
        </div>
    );
}

export default ChatBox;