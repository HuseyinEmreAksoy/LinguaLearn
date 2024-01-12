import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

function LogInPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

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
        <div style={{
            position: 'absolute', left: '50%', top: '40%',
            transform: 'translate(-50%, -50%)'
        }}>
            <div style={style}>
                <h1>LinguaLearn</h1>
            </div>
            <div style={style}>
                <TextField value={userName} onChange={handleUserName} required label="User Name"/>
            </div>
            <div style={style}>
                <TextField value={password} onChange={handlePassword} required label= "Password" type="password"/>
            </div>
            <div style={style}>
                <Button variant='contained' onClick={signIn}>Sign In</Button>
            </div>
        </div>
    );

    function signIn() {
        console.log(userName);
        console.log(password);
    }
}

export default LogInPage;