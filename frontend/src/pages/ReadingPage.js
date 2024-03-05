import { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import {createQuestion} from "../components/Question";
import { Button } from "@mui/material";
import Wrapper from "../components/Helper/Wrapper";
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
import DraggableButton from "../components/DraggableButton";
import LoadingPage from "../components/LoadingPage";
import axios from "axios";

const ReadingPage = () => {

    const [text, setText] = useState("");
    const [textLevel, setTextLevel] = useState("B2");
    const [questions, setQuestions] = useState([]);
    const [sıklar, setSıklar] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmittable, setIsSubmittable] = useState(false);
    const [numberOfCorrectAnswer, setNumberOfCorrectAnswer] = useState(0);
    let newAnswers = [];

    useEffect(() => {
        handleNew();
    }, []);

    const checkSubmittableState = () => {
        let newIsSubmittable = true;
        for(let i = 0; i < newAnswers.length; i++) {
            if(newAnswers[i] === "") {
                newIsSubmittable = false;
                break;
            }
        }
        setIsSubmittable(newIsSubmittable);
    };


    const update = (value, index) => {
        for(let i = 0; i < newAnswers.length; i++) {
            if(i === index) {
                newAnswers[i] = value;
            }
        }
        setAnswers(newAnswers);
        checkSubmittableState();
    };

    const turnQuestionRed = (index) => {
        return changeQuestionColor(index, " bg-red-500");
    };

    const turnQuestionGreen = (index) => {
        return changeQuestionColor(index, " bg-green-500");
    };

    const changeQuestionColor = (index, color) => {
        let oldProps = questions[index].props;
        return createQuestion(oldProps.question, oldProps.a, oldProps.b, oldProps.c, oldProps.d, oldProps.correctAnswer, oldProps.update, color);
    };

    const handleSubmit = () => {
        let newQuestions = [];
        let newNumberOfCorrectAnswer = 0;
        for(let i = 0; i < questions.length; i++) {
            if(questions[i].props.correctAnswer === answers[i]) {
                newQuestions.push(turnQuestionGreen(i));
                newNumberOfCorrectAnswer += 1;
            }
            else {
                newQuestions.push(turnQuestionRed(i));
            }
        }
        setQuestions(newQuestions);
        setNumberOfCorrectAnswer(newNumberOfCorrectAnswer);
        setIsSubmitted(true);
        setIsSubmittable(false);
    };

    //TO-DO: Delete this part of code after establish the connection to backend ****************************************************************
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz      ';
    
    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    };

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

     //******************************************************************************************************************************************

    const handleNew = async () => {
        setQuestions([]);
        setAnswers([]);
        setText("");
        setIsSubmitted(false);
        newAnswers = [];

        let newQuestions = [];
        let numberOfQuestions = 5;
        for(let i = 0; i < numberOfQuestions; i++) {
            newAnswers.push("");
            newQuestions.push(createQuestion(generateString(Math.floor(Math.random() * 100) + 50), generateString(10), generateString(4), generateString(14), generateString(19), "c", 
            (value) => {update(value, i);}, ""));
        }
        setAnswers(newAnswers);
        setQuestions(newQuestions);

        const response = await axios.get(`http://localhost:8080/api/v1/text/findByLevel?textLevel=${textLevel}&textLanguage=English`);
        const dataArray = response.data; 

        let randomElement;
        if (dataArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * dataArray.length);
            randomElement = dataArray[randomIndex];
        }

        const qa = await axios.post('http://127.0.0.1:8000/qaGenerator', { text: randomElement.textText });
        console.log("res", qa.data);
        setText(randomElement.textText);
    };

    return(
        <FullPage class="overflow-y-auto overflow-x-hidden">
            <DraggableButton></DraggableButton>
            {
                (text === "" || questions.length === 0) ? 
                    <LoadingPage></LoadingPage>
                :
                <Wrapper>
                    <div class="grid cols-12 justify-start mt-5 ml-40 mr-40">
                        <p class="col-span-12">{text}</p>
                        <div class="mt-10 col-span-12">
                            {questions}
                        </div>
                        <div class="col-span-6 col-start-4 justify-center grid grid-cols-2 gap-4 mb-3 mt-5">
                            <Button onClick={handleSubmit} disabled={!isSubmittable} startIcon={<SendIcon></SendIcon>}>GÖNDER</Button>
                            <Button onClick={handleNew} startIcon={<ReplayIcon></ReplayIcon>}>YENİ</Button>
                        </div>
                        {
                            isSubmitted ?
                                <div class="col-span-6 col-start-4 mb-10">
                                    <p class="flex justify-center">{numberOfCorrectAnswer} doğru cevabınız var!</p>
                                </div>
                            :
                                <></>
                        }
                    </div>
                </Wrapper>
            }
        </FullPage>
    );
}

export default ReadingPage;