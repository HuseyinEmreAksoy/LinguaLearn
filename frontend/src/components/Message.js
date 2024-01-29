import Wrapper from "./Helper/Wrapper";

function Message(props) {
    const text = props.text;
    const divClass = "rounded-lg bg-thistle m-2 clear-both";
    const pElement = <p class="text-prussian_blue m-3">{text}</p>;

    if(props.align === "right") {
        return(
            <div style={{"max-width":"60%"}} class={"float-right " + divClass}>
                {pElement}
            </div>    
        );
    }
    else if(props.align === "left") {
        return(
            <div style={{"max-width":"60%"}} class={"float-left " + divClass}>
                {pElement}
            </div>
        );
    }
    else if(props.align === "center") {
        return(
            <div class={"flex justify-center items-center " + divClass}>
                {pElement}
            </div>
        );
    }
} 

export default Message;