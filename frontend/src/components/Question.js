import { Radio, FormControlLabel, RadioGroup, FormLabel } from "@mui/material";

const Question = (props) => {

    const handleChange = (event) => {
        props.update(event.target.value);
    };

    return(
        <div class={props.class}>
            <RadioGroup
                defaultValue=""
                onChange={handleChange}
            >
                <FormLabel id="demo-radio-buttons-group-label">{props.question}</FormLabel>
                <FormControlLabel value="a" control={<Radio />} label={props.a} />
                <FormControlLabel value="b" control={<Radio />} label={props.b} />
                <FormControlLabel value="c" control={<Radio />} label={props.c} />
                <FormControlLabel value="d" control={<Radio />} label={props.d} />
            </RadioGroup>
        </div>
    );
}

export const createQuestion = (question, a, b, c, d, correctAnswer, update, bgColor) => {
    return(<Question
        class={"mt-5 " + bgColor}
        question={question}
        update={update} 
        a={a} 
        b={b} 
        c={c} 
        d={d}
        correctAnswer={correctAnswer} />);
};

export default Question;