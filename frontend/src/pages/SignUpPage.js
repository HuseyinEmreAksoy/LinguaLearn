import { TextField, InputLabel, Select, MenuItem, Box, FormControl, Button } from "@mui/material";
import { useState } from "react";

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


    return(
        <div class="border-4" style={{
            position: 'absolute', left: '50%', top: '40%',
            transform: 'translate(-50%, -50%)', padding:'3%'
        }}>
            <div style={style}>
                <h1 class="text-3xl">Sign Up</h1>
            </div>
            <div class="h-56 grid grid-cols-3 gap-4 content-start">
                <div>
                    <TextField value={name} onChange={(event) => {setName(event.target.value)}} required label="Name"></TextField>
                </div>
                <div>
                    <TextField value={surname} onChange={(event) => {setSurname(event.target.value)}} required label="Surname"></TextField>
                </div>
                <div>
                    <TextField value={email} onChange={(event) => {setEmail(event.target.value)}} required label="E-Mail"></TextField>
                </div>
                <div>
                    <TextField value={password} onChange={(event) => {setPassword(event.target.value)}} required label= "Password" type="password"/> 
                </div>
                <div>
                    <TextField value={passwordAgain} onChange={(event) => {setPasswordAgain(event.target.value)}} required label= "Password Again" type="password"/> 
                </div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={(event) => {setLanguage(event.target.value)}}
                    >
                        <MenuItem value={"English"}>English</MenuItem>
                        <MenuItem value={"German"}>German</MenuItem>
                        <MenuItem value={"French"}>French</MenuItem>
                        <MenuItem value={"Spanish"}>Spanish</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={style}>
                <Button variant="contained">Submit</Button>
            </div>
        </div>
    );
}

export default SignUpPage;