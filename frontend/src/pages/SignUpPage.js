import { TextField, InputLabel, Select, MenuItem, Box, FormControl, Button, Alert } from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as routes from '../constants/routePaths';



const SignUpPage = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");
    const [language, setLanguage] = useState("");
    const [level, setLevel] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '5%',
        paddingLeft: '3%',
        paddingRight: '2%'
    };

    const isSaveable = () => {
        let toReturn = false;

        if(isEverythingFilled()) {
            if(password == passwordAgain) {
                toReturn = true;
            }
            else {
                setErrorMessage("Parolalar Eşleşmiyor!");
            }
        }
        else {
            setErrorMessage("Lütfen tüm alanları doldurun!");
        }

        return toReturn;
    }

    const isEverythingFilled = () => {
        return(
            name != "" &&
            surname != "" &&
            password != "" &&
            passwordAgain != "" &&
            email != "" &&
            language != "" &&
            level != "");
    };

    async function save(event){
        setErrorMessage("");
        let user = {userName : name+ " " + surname,
                    userEmail : email,
                    userPassword : password,
                    userMainLanguage : language,
                    userLvl: level};

        if(isSaveable()) {
            event.preventDefault();
            try 
            {   
                await axios.post("http://localhost:8080/api/v1/user/save", user);
                navigate(routes.USER_PAGE_PATH, {state: {user: user}});
                setEmail("");
                setSurname("");
                setName("");
                setPassword("");
                setPasswordAgain("");
                setLanguage("");
                setLevel("");
            }
            catch(err){
                alert("User Register is Failed!")
            }
        }
    }

    return(
        <div class="border-4" style={{
            position: 'absolute', left: '50%', top: '40%',
            transform: 'translate(-50%, -50%)', padding:'3%'
        }}>
            <div style={style}>
                <h1 class="text-3xl">Kaydolun ve Öğrenmeye Başlayın!</h1>
            </div>
            {
                errorMessage != "" ?
                    <div class="mb-2">
                        <Alert severity="error">{errorMessage}</Alert>
                    </div>
                :
                    <></>
            }
            <div class="h-56 grid grid-cols-3 gap-4 content-start">
                <div>
                    <TextField value={name} onChange={(event) => {setName(event.target.value)}} required label="İsim"></TextField>
                </div>
                <div>
                    <TextField value={surname} onChange={(event) => {setSurname(event.target.value)}} required label="Soyisim"></TextField>
                </div>
                <div>
                    <TextField value={email} onChange={(event) => {setEmail(event.target.value)}} required label="E-Posta"></TextField>
                </div>
                <div>
                    <TextField value={password} onChange={(event) => {setPassword(event.target.value)}} required label= "Parola" type="password"/> 
                </div>
                <div>
                    <TextField value={passwordAgain} onChange={(event) => {setPasswordAgain(event.target.value)}} required label= "Parolayı Yeniden Girin" type="password"/> 
                </div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Öğrenilecek Dil</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={(event) => {setLanguage(event.target.value)}}
                    required
                    >
                        <MenuItem value={"English"}>İngilizce</MenuItem>
                        <MenuItem value={"German"}>Almanca</MenuItem>
                        <MenuItem value={"French"}>Fransızca</MenuItem>
                        <MenuItem value={"Spanish"}>İspanyolca</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Dil Seviyesi</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={level}
                    label="Level"
                    onChange={(event) => {setLevel(event.target.value)}}
                    required
                    >
                        <MenuItem value={"A1"}>A1</MenuItem>
                        <MenuItem value={"A2"}>A2</MenuItem>
                        <MenuItem value={"B1"}>B1</MenuItem>
                        <MenuItem value={"B2"}>B2</MenuItem>
                        <MenuItem value={"C1"}>C1</MenuItem>
                        <MenuItem value={"C2"}>C2</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={style}>
                <Button onClick={save} variant="contained">Kaydol</Button>
            </div>
        </div>
    );
}

export default SignUpPage;