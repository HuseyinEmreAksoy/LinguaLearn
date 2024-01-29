import useScreenSize from "../../hooks/useScreenSize";

const FullPage = (props) => {
    const screenSize = useScreenSize();
    
    return(
        <div class={props.class} style={{width: screenSize.width, height: screenSize.height}}>
            {props.children}
        </div>
    );
}

export default FullPage;