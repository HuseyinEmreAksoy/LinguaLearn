import Wrapper from "./Helper/Wrapper";

function Message(props) {
    const text = props.text;
    const divClass = "rounded-lg bg-thistle m-2";
    const pElement = <p class="text-prussian_blue m-1 object-contain">{text}</p>;

    if(props.align === "right") {
        return(
            <div class={"col-start-3 col-span-4 " + divClass}>
                {pElement}
            </div>    
        );
    }
    else if(props.align === "left") {
        return(
            <div class={"col-span-4 " + divClass}>
                {pElement}
            </div>
        );
    }
    else if(props.align === "center") {
        return(
            <div class={"col-span-6 " + divClass}>
                {pElement}
            </div>
        );
    }
} 

export default Message;