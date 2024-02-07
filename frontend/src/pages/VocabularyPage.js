import { Button } from "@mui/material";
import FlashCard from "../components/FlashCard";
import FullPage from "../components/Helper/FullPage"
import { useState } from "react";
import DraggableButton from "../components/DraggableButton";
import ReplayIcon from '@mui/icons-material/Replay';

const VocabularyPage = (props) => {
    const numberOfWord = 6;
    // TO-DO: 6 words will be given per page. A word will contain 2 string ["front", "back"]

    const dummyWords = [["Mouse", "Fare"], ["Yellow", "Sarı"], ["Backpack", "Sırt Çantası"], ["Apple", "Elma"], ["Water", "Su"], ["Who", "Kim"]];
    let initialAnswers = [];
    for(let i = 0; i < numberOfWord; i++) {
        initialAnswers.push("");
    }
    
    const [words, setWords] = useState(dummyWords);
    const [answers, setAnswers] = useState(initialAnswers);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [correntAnswer, setCorrectAnswer] = useState(-1);

    const handleSubmit = () => {
        setIsSubmitted(true);
        let numberOfCorrectAnswer = 0;
        for(let i = 0; i < numberOfWord; i++) {
            if(answers[i].toUpperCase() === words[i][1].toUpperCase()) {
                numberOfCorrectAnswer++;
            }
        }
        setCorrectAnswer(numberOfCorrectAnswer);
    }    

    const fetchNewWords = () => {
        setWords([]);
         
        //TO-DO: Get 6 new words from somewhere
        
        setIsSubmitted(false);
    }

    const updateAnswer = (value, index) => {
        let newAnswers = [];
        for(let i = 0; i < numberOfWord; i++) {
            if(index !== i) 
                newAnswers.push(answers[i]);
            else
                newAnswers.push(value);
        }
        setAnswers(newAnswers);
    }

    //Initilize cards
    let cardElements = [];
    if(words.length === 0) {
        let loadingFlashCard = <FlashCard front="Yükleniyor..." back="Yükleniyor..." update={() => {}} isFlippable={true}></FlashCard>
        for(let i = 0; i < 6; i++) {
            cardElements.push(loadingFlashCard);
        }
    }
    else {
        cardElements = words.map((element, index) => {return(<FlashCard front={element[0]} back={element[1]} id={index} update={updateAnswer} isFlippable={isSubmitted}></FlashCard>);});
    }

    return(
        <FullPage>
            <DraggableButton></DraggableButton>
            <div class="w-9/12 bg-red grid grid-cols-3 gap-8" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                {cardElements}
                <div class="col-start-2 justify-center grid grid-cols-2 gap-4">
                    <Button onClick={handleSubmit} disabled={words.length === 0 || isSubmitted}>SUBMIT</Button>
                    <Button onClick={fetchNewWords} startIcon={<ReplayIcon></ReplayIcon>}>NEW</Button>
                </div>
                {
                    isSubmitted ? 
                        <div class="col-span-3 flex justify-center">
                            <p>You have {correntAnswer} corrent answer!</p>
                        </div>
                    :
                        <></>
                }
            </div>
        </FullPage>
    );
}

export default VocabularyPage;