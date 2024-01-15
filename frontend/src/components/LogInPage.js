import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    HOME_PAGE_PATH, READ_PAGE_PATH, LS_PAGE_PATH, SpeechToText_PAGE_PATH
} from '../constants/routePaths';
function LogInPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

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

    const logInPage = (
        <div style={{
            position: 'absolute', left: '50%', top: '40%',
            transform: 'translate(-50%, -50%)'
        }}>
            <div style={style}>
                <h1>LinguaLearn</h1>
            </div>
            <div style={style}>
                <TextField value={userName} onChange={handleUserName} required label="User Name" />
            </div>
            <div style={style}>
                <TextField value={password} onChange={handlePassword} required label="Password" type="password" />
            </div>
            <div style={style}>
                <Button variant='contained' onClick={logIn}>Sign In</Button>
            </div>
        </div>
    );

    if (!isLoggedIn) {
        return (logInPage);
    }
    // TO-DO: Create new home page component and return it in here!
    else {
        return (
            <div>
                <h1 style={{
                    position: 'absolute', left: '50%', top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    Welcome PAGE!
                </h1>

                <Button
                style={{
                    position: 'absolute', left: '50%', top: '60%',
                    transform: 'translate(-50%, -50%)'
                }}
                    variant='contained'
                    type="button"
                    onClick={() => navigate(SpeechToText_PAGE_PATH, { state: {} })}
                >Konuşmak ister misin brooo!
                </Button>
            </div>
        );
    }

    function logIn() {
        console.log(userName);
        console.log(password);
        setIsLoggedIn(true);
    }
}

export default LogInPage;