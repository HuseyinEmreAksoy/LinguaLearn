import { TextField, InputLabel, Select, MenuItem, Box, FormControl, Button } from "@mui/material";
import { useState } from "react";
import axios from 'axios';



function SignUpPage() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");
    const [language, setLanguage] = useState("Language");

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '5%',
        paddingLeft: '3%',
        paddingRight: '2%'
    };

    async function save(event){
        event.preventDefault();
        try 
        {   
            await axios.post("http://localhost:8080/api/v1/user/save",
            {userName : name+ " " + surname,
            userEmail : email,
            userPassword : password,
            userMainLanguage : language
        });
            alert("User Register is Successful!!");
            setEmail("");
            setSurname("");
            setName("");
            setPassword("");
            setPasswordAgain("");
            setLanguage("Language");
            
        }
        catch(err){
            alert("User Register is Failed!")
        }
    }

    return(
        <div class="border-4" style={{
            position: 'absolute', left: '50%', top: '40%',
            transform: 'translate(-50%, -50%)', padding:'3%'
        }}>
            <div style={style}>
                <h1 class="text-3xl">Kaydolma Sayfası</h1>
            </div>
            <div class="h-56 grid grid-cols-3 gap-4 content-start">
                <div>
                    <TextField value={name} onChange={(event) => {setName(event.target.value)}} required label="İsim"></TextField>
                </div>
                <div>
                    <TextField value={surname} onChange={(event) => {setSurname(event.target.value)}} required label="Soyisim"></TextField>
                </div>
                <div>
                    <TextField value={email} onChange={(event) => {setEmail(event.target.value)}} required label="E-Mail"></TextField>
                </div>
                <div>
                    <TextField value={password} onChange={(event) => {setPassword(event.target.value)}} required label= "Şifre" type="password"/> 
                </div>
                <div>
                    <TextField value={passwordAgain} onChange={(event) => {setPasswordAgain(event.target.value)}} required label= "Şifreyi Yeniden Girin" type="password"/> 
                </div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Ana Dil</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={(event) => {setLanguage(event.target.value)}}
                    >
                        <MenuItem value={"Turkish"}>Turkish</MenuItem>
                        <MenuItem value={"English"}>English</MenuItem>
                        <MenuItem value={"German"}>German</MenuItem>
                        <MenuItem value={"French"}>French</MenuItem>
                        <MenuItem value={"Spanish"}>Spanish</MenuItem>
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