import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import SignUpPage from './SignUpPage';  
import { useNavigate } from "react-router-dom";
import DraggableButton from '../components/DraggableButton';
import useScreenSize from '../hooks/useScreenSize';

function LogInPage() {         
    
    const navigate = useNavigate();
    const screenSize = useScreenSize();
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn]  = useState(false);

    const handleUserName = (event) => {
        setUserName(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%'
    };

    return(
        <>
            <div style={{
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div style={style}>
                    <h1 class="text-5xl">LinguaLearn</h1>
                </div>
                <div style={style}>
                    <TextField value={userName} onChange={handleUserName} required label="User Name"/>
                </div>
                <div style={style}>
                    <TextField value={password} onChange={handlePassword} required label= "Password" type="password"/>
                </div>
                <p class="text-sm">Forget your password?</p>
                <div style={style}>
                    <Button variant='contained' onClick={logIn}>Log In</Button>
                </div>
                <div style={style}>
                    <Button variant='contained' onClick={goToSignUpPage}>Sign Up</Button>   
                </div>
            </div>
            <DraggableButton/>
        </>
    );


    function logIn() {
        console.log(userName);
        console.log(password);
        setIsLoggedIn(true);
    }

    function goToSignUpPage() {
        navigate('/SignUp');
    }
}

export default LogInPage;