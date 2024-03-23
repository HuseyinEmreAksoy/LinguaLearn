import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Alert } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import * as routes from '../constants/routePaths';
import FullPage from '../components/Helper/FullPage';

import axios from 'axios';

const LogInPage = () => {         
    
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
        if(errorMessage != "") {
            setErrorMessage("");
        }
    };

    const handlePassword = (event) => {
        setPassword(event.target.value)
        if(errorMessage != "") {
            setErrorMessage("");
        }
    };

    const getUserByEmail = async (email) => {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/user/findByEmail?userEmail=${email}`);
          return response.data;
        } catch (error) {
            return null;
        }
    };

    const logIn = async () => {
        let user = await getUserByEmail(email);
        if(user == null) {
            setErrorMessage("Kullanıcı Bulunamadı!");
            setEmail("");
            setPassword("");
        }
        else if(user.userPassword != password) {
            setErrorMessage("Yanlış Parola!");
            setPassword("");
        }
        else {
            navigate(routes.USER_PAGE_PATH, {state: {user: user}});
        }
    }

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%'
    };

    return(
        <FullPage>
            <div style={{
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div style={style}>
                    <h1 class="text-5xl mb-5">LinguaLearn</h1>
                </div>
                {
                    errorMessage != "" ?
                        <div class="mb-2">
                            <Alert severity="error">{errorMessage}</Alert>
                        </div>
                    :
                        <></>
                }
                <div style={style}>
                    <TextField value={email} onChange={handleEmail} required label="E-Posta"/>
                </div>
                <div style={style}>
                    <TextField value={password} onChange={handlePassword} required label= "Parola" type="password"/>   
                </div>
                <div style={style}>
                    <Button variant='contained' onClick={logIn}>Oturum Aç</Button>
                </div>
                <div style={{display:"inline-flex", paddingTop:"3%"}}>
                    <p style={{paddingRight:"10px"}}>Hesabın yok mu?</p>
                    <Link onClick={() => {navigate(routes.SIGN_UP_PAGE_PATH)}}>Kaydol!</Link>
                </div>
            </div>
        </FullPage>
    );
}

export default LogInPage;