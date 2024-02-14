import { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import {createQuestion} from "../components/Question";
import { Button } from "@mui/material";
import Wrapper from "../components/Helper/Wrapper";
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
import DraggableButton from "../components/DraggableButton";
import LoadingPage from "../components/LoadingPage";
import TextToSpeech from "../components/TextToSpeech";

const ListeningPage = () => {

    const [text, setText] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmittable, setIsSubmittable] = useState(false);
    const [numberOfCorrectAnswer, setNumberOfCorrectAnswer] = useState(0);
    let newAnswers = [];

    // let dummyText = "Until now, I thought that the best metaphor for filmmaking that I’d ever seen in a movie was found in Akira Kurosawa’s “High and Low”: throwing bags of money out of a speeding train. But Josh and Benny Safdie’s new film, “Uncut Gems,” offers a better, if more elaborate, one, when its protagonist, Howard Ratner (Adam Sandler), a Diamond District jewelry dealer who’s also a compulsive gambler, places a bet on a basketball game. Howard isn’t merely risking money on the outcome; he’s crafting a story that, for the bet to pay off, has to come out right—who wins the opening tip-off, how many points a particular player will score, whether or not the winning team covers the spread. Howard’s story has to correspond to reality, or, rather, vice versa. With his grandiose vision of winning, he’s the ultimate fantasist and, in his mortal dependence on what actually happens, the ultimate realist. He’s a lot like a director behind a camera.";
    let dummyText = "Hi, I am a dummy text.";

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
    };

    return(
        <FullPage class="overflow-y-auto overflow-x-hidden">
            <DraggableButton></DraggableButton>
            {
                (text === "" || questions.length === 0) ? 
                    <LoadingPage></LoadingPage>
                :
                    <div class="grid cols-12 mt-5 justify-center">
                        <div class="col-start-1 col-span-12">
                            <TextToSpeech text={dummyText} language="English"></TextToSpeech>
                        </div>
                        <div class="mt-3 col-span-12">
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
            }
        </FullPage>
    );
}

export default ListeningPage;