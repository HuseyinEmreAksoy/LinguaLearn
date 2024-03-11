import { Radio, FormControlLabel, RadioGroup, FormLabel } from "@mui/material";

const Question = (props) => {

    const handleChange = (event) => {
        props.update(event.target.value);
    };

    let choicesElement = props.choices.map((element) => {return (<FormControlLabel value={element} control={<Radio/>} label={element} />);});

    return(
        <div class={props.class}>
            <RadioGroup
                defaultValue=""
                onChange={handleChange}
            >
                <FormLabel id="demo-radio-buttons-group-label">{props.question}</FormLabel>
                {choicesElement}
            </RadioGroup>
        </div>
    );
}

export const createQuestion = (question, choices, correctAnswer, update, bgColor) => {
    return(<Question
        class={"mt-5 " + bgColor}
        question={question}
        update={update} 
        choices={choices}
        correctAnswer={correctAnswer} />);
};

export default Question;