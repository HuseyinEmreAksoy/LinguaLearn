import { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import Question from "../components/Question";
import { Button } from "@mui/material";
import Wrapper from "../components/Helper/Wrapper";
import ReplayIcon from '@mui/icons-material/Replay';

const ReadingPage = () => {

    const createQuestion = (question, a, b, c, d, update, bgColor) => {
        return(<Question
            class={"mt-5" + " " + bgColor}
            question={question}
            update={update} 
            a={a} 
            b={b} 
            c={c} 
            d={d} />);
    };

    let dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo et magna tincidunt, sit amet ornare nisl imperdiet. Integer laoreet enim urna, et placerat justo scelerisque eget. Cras maximus mi a ex porta, vitae convallis orci aliquet. Proin ultricies, massa quis fermentum vulputate, nisl ex interdum purus, quis euismod mauris dui ut felis. Donec fringilla vulputate mi ac auctor. Sed posuere tellus ac rutrum mattis. Aliquam ligula sapien, pulvinar non imperdiet et, laoreet sed nisl. Phasellus dapibus varius leo, a ultricies orci. Etiam sed gravida erat, at gravida dolor. Quisque dapibus felis vitae urna tincidunt tempor. Ut hendrerit, lorem eu tempus bibendum, tortor eros faucibus diam, quis vulputate nibh leo at urna. Ut vitae convallis urna. Sed placerat lacus nulla, venenatis luctus nisl cursus non.";
    let dummyTitle = "Dummy"

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isSubmitDisable, setIsSubmitDisable] = useState(false);
    let newAnswers2 = [];

    useEffect(() => {
        if(answers.length === 0) {
            setIsSubmitDisable(true);
            return;
        }

        for(let i = 0; i < answers.length; i++) {
            if(answers === "") {
                setIsSubmitDisable(true);
                return;
            }
        }
        setIsSubmitDisable(false);
        
    }, [answers, newAnswers2]);

    const update = (value, index) => {
        console.log("value " + value);
        console.log("index " + index);
        // let newAnswers = answers.map((element, i) => {
        //     if(i === index)
        //         return value;
        //     return element;
        // });
        let newAnswers = [];
        for(let i = 0; i < newAnswers2.length + 1; i++) {
            if(i === index) {
                newAnswers.push(value);
            }
            else {
                if(newAnswers2[i] !== undefined)
                    newAnswers.push(newAnswers2[i]);
            }
        }

        console.log(newAnswers);
        newAnswers2 = [...newAnswers]
        setAnswers(newAnswers2);
    } 

    const dummyFetch = () => {
        setTitle(dummyTitle);
        setText(dummyText);
        let newAnswers = [];
        for(let i = 0; i < 2; i++) {
            newAnswers.push("");
        }
        console.log("first value");
        console.log(newAnswers);
        setAnswers(newAnswers);
        let firstQuestion = createQuestion("Who is the founder of LinguaLearn?", "Hüseyin Emre Aksoy", "Ömer Faruk Merey", "Ömer Davarcı", "All of them", (value) => {update(value, 0)}, "");
        let secondQuestion = createQuestion("Who am I?", "No idea", "just someone", "me", "my princess", (value) => {update(value, 1)}, ""); 
        let dummyQuestions = [firstQuestion, secondQuestion]
        setQuestions(dummyQuestions);
    }

    const changeQuestionColor = (index, color) => {
        let oldProps = questions[index].props;
        let newElement = createQuestion(oldProps.question, oldProps.a, oldProps.b, oldProps.c, oldProps.d, oldProps.update, color);
        const newQuestions = questions.map((question, i) => {
            if(i === index)
                return newElement;
            return question;
        });
        setQuestions(newQuestions);
    }

    const handleSubmit = () => {
        for(let i = 0; i < questions.length; i++) {
            
        }
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
                    <div class="grid cols-1 justify-start mt-5 ml-40 mr-40">
                        <p>{text}</p>
                        <div class="mt-10">
                            {questions}
                        </div>
                        <div class="justify-center grid grid-cols-2 gap-4">
                            <Button onClick={handleSubmit} disabled={isSubmitDisable}>YÜKLE</Button>
                            <Button onClick={dummyFetch} startIcon={<ReplayIcon></ReplayIcon>}>YENİ</Button>
                        </div>
                    </div>
                    <div>
                        <Button onClick={() => {changeQuestionColor(0, "bg-red-500");}}>Turn Red</Button>
                        <Button onClick={() => {changeQuestionColor(0, "bg-green-500")}}>Turn Green</Button>
                        <Button onClick={() => {console.log(answers);}}>answer</Button>
                    </div>
                </Wrapper>
            }
        </FullPage>
    );
}

export default ReadingPage;