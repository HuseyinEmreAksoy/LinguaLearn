import { useNavigate } from "react-router-dom";

function NoPage() {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Something went wrong...</h1>
            <p>You can go to login page by clicking <a onClick={goToLogInPage}><b>here</b></a></p>
        </div>
    );

    function goToLogInPage() {
        navigate("/");
    }
}

export default NoPage;