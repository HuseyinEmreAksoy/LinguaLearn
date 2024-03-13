import { Button } from "@mui/material";
import FlashCard from "../components/FlashCard";
import FullPage from "../components/Helper/FullPage"
import { useEffect, useState } from "react";
import DraggableButton from "../components/DraggableButton";
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
import { ROOT_PATH } from "../constants/apiPaths";
import axios from "axios";
import useScreenSize from "../hooks/useScreenSize";

const VocabularyPage = (props) => {
    const numberOfWord = 6;
    const screenSize = useScreenSize();

    // const dummyWords = [["Mouse", "Fare"], ["Yellow", "Sarı"], ["Backpack", "Sırt Çantası"], ["Apple", "Elma"], ["Water", "Su"], ["Who", "Kim"]];
    let initialAnswers = [];
    for(let i = 0; i < numberOfWord; i++) {
        initialAnswers.push("");
    }
    
    const [words, setWords] = useState([]);
    const [answers, setAnswers] = useState(initialAnswers);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [correntAnswer, setCorrectAnswer] = useState(-1);

    useEffect(() => {
        handleNew();
    }, []);

    const getNRandomNumber = (n, upperLimit) => {
        let toReturn = [];
        for(let i = 0; i < n; i++) {
            let rand = -1;
            while(rand === -1 || toReturn.includes(rand)) {
                rand = Math.floor(Math.random() * (upperLimit + 1));
            }
            toReturn.push(rand);
        }
        return toReturn;
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        let numberOfCorrectAnswer = 0;
        for(let i = 0; i < numberOfWord; i++) {
            if(answers[i].toUpperCase() === words[i][1].toUpperCase()) {
                numberOfCorrectAnswer++;
            }
        }
        setCorrectAnswer(numberOfCorrectAnswer);
    };

    const handleNew = async () => {
        setWords([]);
        const response = await axios.get("http://localhost:8080/api/v1/word/findByLevel?wordLevel=B2&wordLanguage=English");
        let randomIndexes = getNRandomNumber(numberOfWord, response.data.length);
        let newWords = [];
        for(let i = 0; i < numberOfWord; i++) {
            let word = response.data[randomIndexes[i]];
            newWords.push([word.wordWord, word.wordTranslation]);
        }

        setWords(newWords);
        setIsSubmitted(false);
    };

    const updateAnswer = (value, index) => {
        let newAnswers = [];
        for(let i = 0; i < numberOfWord; i++) {
            if(index !== i) 
                newAnswers.push(answers[i]);
            else
                newAnswers.push(value);
        }
        setAnswers(newAnswers);
    };

    //Initilize cards
    let cardElements = [];
    if(words.length === 0) {
        let loadingFlashCard = <FlashCard front="Yükleniyor..." back="Yükleniyor..." update={() => {}} isFlippable={true}></FlashCard>
        for(let i = 0; i < 6; i++) {
            cardElements.push(loadingFlashCard);
        }
    }
    else {
        cardElements = words.map((element, index) => {return(<FlashCard             
            class={`bg-gradient-to-r ${index % 2 === 0 ? 'from-orange-300 to-yellow-200' : 'from-pink-300 to-yellow-200'}`} 
            front={element[0]} back={element[1]} id={index} update={updateAnswer} isFlippable={isSubmitted}></FlashCard>);});
    }

    return(
        <div class="flex justify-center items-center min-h-screen" style={{width: screenSize.width, height: screenSize.height, background: 'linear-gradient(to right, #dae2f8, #d6a4a4)'}}>

            <div class="w-9/12 bg-red grid grid-cols-3 gap-8 mt-4" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                {cardElements}
                <div class="col-start-2 justify-center grid grid-cols-2 gap-4 mb-4">
                    <Button onClick={handleSubmit} disabled={words.length === 0 || isSubmitted} startIcon={<SendIcon></SendIcon>}>GÖNDER</Button>
                    <Button onClick={handleNew} startIcon={<ReplayIcon></ReplayIcon>}>YENİ</Button>
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
            <DraggableButton></DraggableButton>

        </div>
    );
}

export default VocabularyPage;