import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlashCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        if(!props.isFlippable) {
            setValue("");
        }
        if(!props.isFlippable) {
            setIsFlipped(false);
        }
    }, [props.isFlippable]);

    const handleChange = (event) => {
        setValue(event.target.value);
        props.update(event.target.value, props.id);
    };

    const flip = () => {
        if(props.isFlippable){
            setIsFlipped(!isFlipped);
        }
    };

    return(
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <Card class={props.class} sx={{ minWidth: 275 }}>
                <CardContent onClick={flip}>
                    <p class="flex justify-center mt-12 mb-24">{props.front}</p>
                </CardContent>
                <CardActions class="flex justify-center">
                    <TextField class="m-3" value={value} onChange={handleChange} size='small'></TextField>
                </CardActions>
            </Card>

            <Card class={props.class} sx={{ minWidth: 275 }}>
                <CardContent onClick={flip}>
                    <p class="flex justify-center mt-12 mb-24">{props.back}</p>
                </CardContent>
                <CardActions style={{visibility:"hidden"}} class="flex justify-center">
                    <TextField class="m-3" onChange={handleChange} size='small'></TextField>
                </CardActions>
            </Card>
        </ReactCardFlip>
    );
}

export default FlashCard;