import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import DraggableButton from '../components/DraggableButton';
import useScreenSize from '../hooks/useScreenSize';
import {
    Grammar_PAGE_PATH,
	LS_PAGE_PATH, READ_PAGE_PATH, SignUp_PAGE_PATH, SpeechToText_PAGE_PATH,
  } from '../constants/routePaths';
import SignUpPage from './SignUpPage';
import FullPage from '../components/Helper/FullPage';

function LogInPage() {         
    
    const navigate = useNavigate();
    const screenSize = useScreenSize();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                        <TextField value={email} onChange={handleEmail} required label="E-Mail"/>
                        :
                        <TextField value={email} onChange={handleEmail} error helperText="No Such E-Mail Found!" required label="E-Mail"/>
                    }
                </div>
                <div style={style}>
                    {!isPasswordErrorActive ?
                        <TextField value={password} onChange={handlePassword} required label= "Password" type="password"/>   
                        :
                        <TextField value={password} onChange={handlePassword} error helperText="Invalid Password!" required label= "Password" type="password"/> 
                    }
                </div>
                {/* <Link onClick={() => {console.log("clicked");}} underline="hover" variant='body2'>Forgot Your Password?</Link> */}
                <div style={style}>
                    <Button variant='contained' onClick={logIn}>Log In</Button>
                </div>
                <div style={{display:"inline-flex", paddingTop:"3%"}}>
                    <p style={{paddingRight:"10px"}}>Need an account?</p>
                    <Link onClick={() => {navigate(SignUp_PAGE_PATH)}}>SING UP!</Link>
                </div>
                <div style={style}>
                    <Button variant='contained' onClick={() => navigate(SpeechToText_PAGE_PATH, { state: {} })}>Konuşallım mı brooooo</Button>   
                </div>
                <div style={style}>
                    <Button variant='contained' onClick={() => navigate(Grammar_PAGE_PATH, { state: {} })}>Grammar Page</Button>   
                </div>
            </div>
            <DraggableButton/>
        </FullPage>
    );


    function logIn() {
        console.log(email);
        console.log(password);
        setPassword("");
        setIsEmailErrorActive(true);
    }
}

export default LogInPage;