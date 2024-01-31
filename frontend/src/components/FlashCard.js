import { TextField, Typography, useThemeProps } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions} from '@mui/material';
import { useState } from 'react';

const FlashCard = (props) => {
    const [answer, setAnswer] = useState("");

    const handleChange = (event) => {
        setAnswer(event.target.value);
        props.update(event.target.value, props.id);
    }

    return(
            <Card class={props.class} sx={{ minWidth: 275 }}>
                <CardContent>
                    <p class="flex justify-center mt-12">{props.front}</p>
                </CardContent>
                <CardActions class="flex justify-center">
                    <TextField class="m-3 mt-24" onChange={handleChange} size='small'></TextField>
                </CardActions>
            </Card>
    );
}

export default FlashCard;