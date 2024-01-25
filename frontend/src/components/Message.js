import Wrapper from "./Helper/Wrapper";

function Message(props) {
    const text = props.text;

    if(props.align === "right") {
        return(
            <div class="p-2 rounded col-start-2">
                <p class="text-pomp_and_power">{text}</p>
            </div>    
        );
    }
    else if(props.align === "left") {
        return(
            <Wrapper>
                <div class="p-2 rounded col-start-1">
                    <p class="text-pomp_and_power">{text}</p>
                </div>
                <div></div>
            </Wrapper>
        );
    }
} 

export default Message;