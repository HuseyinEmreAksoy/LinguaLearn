import { TextField, Typography, useThemeProps } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions} from '@mui/material';
import { useState } from 'react';

const FlashCard = (props) => {
    const [answer, setAnswer] = useState("");

    const handleChange = (event) => {
        setAnswer(event.target.value);
    }

    return(
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.front}
                    </Typography>
                </CardContent>
                <CardActions>
                    <TextField onChange={handleChange} size='small'></TextField>
                </CardActions>
            </Card>
    );
}

export default FlashCard;