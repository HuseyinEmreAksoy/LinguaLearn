import { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import Question from "../components/Question";
import { Button } from "@mui/material";
import Wrapper from "../components/Helper/Wrapper";
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
import DraggableButton from "../components/DraggableButton";

const ReadingPage = () => {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmittable, setIsSubmittable] = useState(false);
    const [numberOfCorrectAnswer, setNumberOfCorrectAnswer] = useState(0);
    let newAnswers = [];

    useEffect(() => {
        handleNew()
    }, []);

    const createQuestion = (question, a, b, c, d, correctAnswer, update, bgColor) => {
        return(<Question
            class={"mt-5" + " " + bgColor}
            question={question}
            update={update} 
            a={a} 
            b={b} 
            c={c} 
            d={d}
            correctAnswer={correctAnswer} />);
    };

    const checkSubmittableState = () => {
        let newIsSubmittable = true;
        for(let i = 0; i < newAnswers.length; i++) {
            if(newAnswers[i] == "") {
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
        setTitle("");
        setIsSubmitted(false);
        newAnswers = [];

        await delay(1000);

        let newQuestions = [];
        let numberOfQuestions = 5;
        for(let i = 0; i < numberOfQuestions; i++) {
            newAnswers.push("");
            newQuestions.push(createQuestion(generateString(50), generateString(10), generateString(4), generateString(14), generateString(19), "c", 
            (value) => {update(value, i);}, ""));
        }
        setAnswers(newAnswers);
        setQuestions(newQuestions);
        setText(generateString(500));
        setTitle(generateString(10));
    };

    return(
        <FullPage class="overflow-y-scroll overflow-x-hidden">
            <DraggableButton></DraggableButton>
            {
                (title === "" || text === "" || questions.length === 0) ? 
                    <div class="h-screen flex items-center justify-center">
                        <h1>Yükleniyor...</h1>
                    </div>
                :
                <Wrapper>
                    <div class="flex justify-center mt-10">
                        <h1>{title}</h1>
                    </div>
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