import { useLocation } from "react-router-dom";
import FullPage from "../components/Helper/FullPage";
import DraggableButton from "../components/DraggableButton";

const UserPage = () => {
    const location = useLocation();
    let user = location.state.user;
    console.log(user);
    
    return(
        <FullPage>
            <DraggableButton user={user}></DraggableButton>
            <h1>{user.userName}</h1>
        </FullPage>
    );
}

export default UserPage;