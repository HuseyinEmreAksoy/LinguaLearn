import { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import Question from "../components/Question";
import { Button } from "@mui/material";
import Wrapper from "../components/Helper/Wrapper";
import ReplayIcon from '@mui/icons-material/Replay';

const ReadingPage = () => {

    let dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo et magna tincidunt, sit amet ornare nisl imperdiet. Integer laoreet enim urna, et placerat justo scelerisque eget. Cras maximus mi a ex porta, vitae convallis orci aliquet. Proin ultricies, massa quis fermentum vulputate, nisl ex interdum purus, quis euismod mauris dui ut felis. Donec fringilla vulputate mi ac auctor. Sed posuere tellus ac rutrum mattis. Aliquam ligula sapien, pulvinar non imperdiet et, laoreet sed nisl. Phasellus dapibus varius leo, a ultricies orci. Etiam sed gravida erat, at gravida dolor. Quisque dapibus felis vitae urna tincidunt tempor. Ut hendrerit, lorem eu tempus bibendum, tortor eros faucibus diam, quis vulputate nibh leo at urna. Ut vitae convallis urna. Sed placerat lacus nulla, venenatis luctus nisl cursus non.";
    let dummyTitle = "Dummy"

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    let newAnswers = [];

    // TO-DO: Write a useEffect to tell whether all the questions answered or not!
    // useState(() => {

    // }, [answers]);

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

    const update = (value, index) => {
        for(let i = 0; i < newAnswers.length; i++) {
            if(i === index) {
                newAnswers[i] = value;
            }
        }
        console.log(newAnswers);
        setAnswers(newAnswers);
    } 

    const dummyFetch = () => {
        setTitle(dummyTitle);
        setText(dummyText);
        for(let i = 0; i < 2; i++) {
            newAnswers.push("");
        }
        setAnswers(newAnswers);
        let firstQuestion = createQuestion("Who is the founder of LinguaLearn?", "Hüseyin Emre Aksoy", "Ömer Faruk Merey", "Ömer Davarcı", "All of them", "d", (value) => {update(value, 0)}, "");
        let secondQuestion = createQuestion("Who am I?", "No idea", "just someone", "me", "my princess", "d", (value) => {update(value, 1)}, ""); 
        let dummyQuestions = [firstQuestion, secondQuestion]
        setQuestions(dummyQuestions);
    }

    const turnQuestionRed = (index) => {
        return changeQuestionColor(index, " bg-red-500");
    }

    const turnQuestionGreen = (index) => {
        return changeQuestionColor(index, " bg-green-500");
    }

    const changeQuestionColor = (index, color) => {
        let oldProps = questions[index].props;
        return createQuestion(oldProps.question, oldProps.a, oldProps.b, oldProps.c, oldProps.d, oldProps.correctAnswer, oldProps.update, color);
    }

    const handleSubmit = () => {
        console.log(answers);
        let newQuestions = [];
        for(let i = 0; i < questions.length; i++) {
            if(questions[i].props.correctAnswer === answers[i]) {
                newQuestions.push(turnQuestionGreen(i));
            }
            else {
                newQuestions.push(turnQuestionRed(i));
            }
        }
        setQuestions(newQuestions);
        setIsSubmitted(true);
    }

    //TO-DO: Delete this part of code after establish the connection to backend ****************************************************************
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz      ';
    
    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

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

        await delay(5000);

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
    }

    return(
        <FullPage class="overflow-y-scroll overflow-x-hidden">
            {
                (title === "" || text === "" || questions.length === 0) ? 
                    <div class="h-screen flex items-center justify-center">
                        <h1>Yükleniyor...</h1>
                        <Button onClick={dummyFetch}>Dummy Fetch</Button>
                    </div>
                :
                <Wrapper>
                    <div class="flex justify-center mt-20">
                        <h1>{title}</h1>
                    </div>
                    <div class="grid cols-12 justify-start mt-5 ml-40 mr-40">
                        <p class="col-span-12">{text}</p>
                        <div class="mt-10 col-span-12">
                            {questions}
                        </div>
                        <div class="col-span-6 col-start-4 justify-center grid grid-cols-2 gap-4 mb-10 mt-5">
                            <Button onClick={handleSubmit}>YÜKLE</Button>
                            <Button onClick={handleNew} startIcon={<ReplayIcon></ReplayIcon>}>YENİ</Button>
                        </div>
                    </div>
                </Wrapper>
            }
        </FullPage>
    );
}

export default ReadingPage;