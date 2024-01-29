import Message from "./Message";

function ChatBox(props) {

    return(
        <div class={"overflow-y-scroll bg-pale_purple " + props.class}>
            {props.messages}
        </div>
    );
}

export default ChatBox;