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

    return(
        <Box
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >
            <div>
                <div>
                    <TextField value={userName} onChange={handleUserName} required label="User Name"/>
                </div>
                <div>
                    <TextField value={password} onChange={handlePassword} required label= "Password" type="password"/>
                </div>
                <div>
                    <Button variant='contained' onClick={signIn}>Sign In</Button>
                </div>
            </div>
        </Box>
    );

    function signIn() {
        console.log(userName);
        console.log(password);
    }
}

export default LogInPage;