import React, { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import { createQuestion } from "../components/Question";
import { Button } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
import DraggableButton from "../components/DraggableButton";
import LoadingPage from "../components/LoadingPage";
import axios from "axios";

const ReadingPage = () => {

    const [text, setText] = useState("");
    const [textLevel, setTextLevel] = useState("B2");
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
        for (let i = 0; i < newAnswers.length; i++) {
            if (newAnswers[i] === "") {
                newIsSubmittable = false;
                break;
            }
        }
        setIsSubmittable(newIsSubmittable);
    };

    const update = (value, index) => {
        for (let i = 0; i < newAnswers.length; i++) {
            if (i === index) {
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
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].props.correctAnswer === answers[i]) {
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

        const response = await axios.get(`http://localhost:8080/api/v1/text/findByLevel?textLevel=${textLevel}&textLanguage=English`);
        const dataArray = response.data;

        let randomElement;
        if (dataArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * dataArray.length);
            randomElement = dataArray[randomIndex];
        }
        setText(randomElement.textText);

        const qa = await axios.post('http://127.0.0.1:8000/qaGenerator', { text: randomElement.textText });
        let newQuestions = [];
        for (let i = 0; i < qa.data.length; i++) {
            newAnswers.push("");
            newQuestions.push(createQuestion(qa.data[i].questionText, qa.data[i].distractors, qa.data[i].answerText, (value) => { update(value, i); }, ""));
        }
        setAnswers(newAnswers);
        setQuestions(newQuestions);
    };

    return (
        <FullPage class="overflow-y-auto overflow-x-hidden bg-blue-50">
            <DraggableButton />
            {
                (text === "") ?
                    <LoadingPage />
                    :
                    <div class="p-4 md:p-10">
                        <div class="max-w-4xl mx-auto">
                            <div class="bg-white shadow rounded-lg p-6 mb-6">
                                <p class="text-gray-800 text-lg">{text}</p>
                            </div>
                            {isQuestionsVisible ? (
                                <>
                                    <div class="space-y-4">
                                        {questions.map((question, index) => (
                                            <div key={index} class="bg-white shadow rounded-lg p-4">
                                                {question}
                                            </div>
                                        ))}
                                    </div>
                                    <div class="flex justify-center space-x-4 mt-4">
                                        <Button variant="contained" style={{ backgroundColor: "#1976d2", color: "white" }} onClick={handleSubmit} disabled={!isSubmittable} startIcon={<SendIcon />}>Submit</Button>
                                        <Button variant="outlined" style={{ borderColor: "#ff9800", color: "#ff9800" }} onClick={handleNew} startIcon={<ReplayIcon />}>New</Button>
                                    </div>
                                    {isSubmitted && (
                                        <div class="text-center mt-4">
                                            <p>{numberOfCorrectAnswer} correct answers!</p>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="flex justify-center mt-4">
                                    <Button
                                        variant="contained"
                                        style={{
                                            backgroundColor: questions.length === 0 ? "#90caf9" : "#1976d2",
                                            color: "white",
                                            transition: "background-color 0.3s", 
                                        }}
                                        onClick={() => setIsQuestionsVisible(true)}
                                        disabled={questions.length === 0}
                                    >
                                        Show Questions
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
            }
        </FullPage>
    );
}

export default ReadingPage;