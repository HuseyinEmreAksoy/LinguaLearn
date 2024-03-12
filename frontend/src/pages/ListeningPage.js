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
import axios from "axios";

const ListeningPage = () => {

    const [text, setText] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmittable, setIsSubmittable] = useState(false);
    const [numberOfCorrectAnswer, setNumberOfCorrectAnswer] = useState(0);
    const [isQuestionsVisible, setIsQuestionsVisible] = useState(false);
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
        return createQuestion(oldProps.question, oldProps.choices, oldProps.correctAnswer, oldProps.update, color);
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

    const handleNew = async () => {
        setIsQuestionsVisible(false);
        setQuestions([]);
        setAnswers([]);
        setText("");
        setIsSubmitted(false);
        newAnswers = [];

        const response = await axios.get("http://localhost:8080/api/v1/text/findByLevel?textLevel=B2&textLanguage=English");
        let newTextObject = response.data[Math.floor(Math.random() * response.data.length)];
        setText(newTextObject.textText);

        const qa = await axios.post('http://127.0.0.1:8000/qaGenerator', { text: newTextObject.textText });
        let newQuestions = [];
        for(let i = 0; i < qa.data.length; i++) {
            newAnswers.push("");
            newQuestions.push(createQuestion(qa.data[i].questionText, qa.data[i].distractors, qa.data[i].answerText, (value) => {update(value, i);}, ""));
        }
        setAnswers(newAnswers);
        setQuestions(newQuestions);
    };

    return(
        <FullPage class="overflow-y-auto overflow-x-hidden">
            <DraggableButton></DraggableButton>
            {
                (text === "") ? 
                    <LoadingPage></LoadingPage>
                :
                    <div class="grid cols-12 mt-5 justify-center">
                        <div class="col-start-1 col-span-12">
                            <TextToSpeech text={text} language="English"></TextToSpeech>
                        </div>
                        {
                            isQuestionsVisible ? 
                                <Wrapper>
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
                                </Wrapper>
                            :
                                <div class="col-span-2 col-start-6 mt-10 mb-10">    
                                    {
                                        questions.length === 0 ?
                                            <Button disabled={true}>Sorular Yükleniyor...</Button>
                                        :
                                            <Button onClick={() => {setIsQuestionsVisible(true);}} disabled={questions.length === 0}>Soruları Göster</Button>
                                    } 
                                </div>
                        }
                    </div>
            }
        </FullPage>
    );
}

export default ListeningPage;