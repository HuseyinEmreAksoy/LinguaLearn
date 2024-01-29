import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import DraggableButton from '../components/DraggableButton';
import useScreenSize from '../hooks/useScreenSize';
import * as routes from '../constants/routePaths';
import SignUpPage from './SignUpPage';
import FullPage from '../components/Helper/FullPage';

import axios from 'axios';

function LogInPage() {         
    
    const navigate = useNavigate();
    const screenSize = useScreenSize();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState('');
    const [isEmailErrorActive, setIsEmailErrorActive] = useState(false);
    const [isPasswordErrorActive, setIsPasswordErrorActive] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
        if(email == "" && isEmailErrorActive){
            setIsEmailErrorActive(false);
        }
    };

    const handlePassword = (event) => {
        setPassword(event.target.value)
        if(password == "" && isPasswordErrorActive) {
            setIsPasswordErrorActive(false);
        }
    };

    const getUserByEmail = async (email) => {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/user/findByEmail?userEmail=${email}`);
          setPasswordValid(response.data?.userPassword);
          setIsEmailErrorActive(false);

          console.log(response.data);
          return response.data;
        } catch (error) {
            setIsEmailErrorActive(true);
          console.error('Error while fetching user by email:', error);
        }
      };

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
                    <h1 class="text-5xl">LinguaLearn</h1>
                </div>
                <div style={style}>
                    {!isEmailErrorActive ? 
                        <TextField value={email} onChange={handleEmail} required label="E-Posta"/>
                        :
                        <TextField value={email} onChange={handleEmail} error helperText="E-Posta Bulunamadı!" required label="E-Posta"/>
                    }
                </div>
                <div style={style}>
                    {!isPasswordErrorActive ?
                        <TextField value={password} onChange={handlePassword} required label= "Parola" type="password"/>   
                        :
                        <TextField value={password} onChange={handlePassword} error helperText="Geçersiz Parola!" required label= "Parola" type="password"/> 
                    }
                </div>
                <div style={style}>
                    <Button variant='contained' onClick={logIn}>Oturum Aç</Button>
                </div>
                <div style={{display:"inline-flex", paddingTop:"3%"}}>
                    <p style={{paddingRight:"10px"}}>Hesabın yok mu?</p>
                    <Link onClick={() => {navigate(routes.SignUp_PAGE_PATH)}}>Kaydol!</Link>
                </div>
            </div>
            <DraggableButton/>
        </FullPage>
    );


    function logIn() {
        console.log(email);
        console.log(password);
        getUserByEmail(email)

        if(passwordValid === password) {
            setIsPasswordErrorActive(false);
        }else{
            setPassword("");
            setIsPasswordErrorActive(true);
        }

    }
}

export default LogInPage;