import { useLocation } from "react-router-dom";
import FullPage from "../components/Helper/FullPage";
import DraggableButton from "../components/DraggableButton";
import { Button } from "@mui/material";
import axios from "axios";

const UserPage = () => {
    const location = useLocation();
    let user = location.state.user;
    console.log(user);
    
    const loadWord = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/performance/" + user.userId + "/Vocabulary");
        console.log(response);
    }

    return(
        <FullPage>
            <DraggableButton user={user}></DraggableButton>
            <div class="grid grid-cols-12 w-auto">
                <div class="col-start-2 col-span-4">
                    <h1>Merhaba {user.userName}!</h1>
                </div>
                <Button onClick={async() => {await loadWord();}}>Click me</Button>
            </div>
        </FullPage>
    );
}

export default UserPage;