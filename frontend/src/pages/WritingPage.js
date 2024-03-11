import React, { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import DraggableButton from "../components/DraggableButton";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ReplayIcon from '@mui/icons-material/Replay';
import {TextField} from "@mui/material";
import Wrapper from "../components/Helper/Wrapper";
import axios from "axios";

const WritingPage = () => {

    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [correctedText, setCorrectedText] = useState("");

    useEffect(() => {
        handleNew();
    }, []);

    const handleChange = (event) => {
        setText(event.target.value);
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
    };

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

     //******************************************************************************************************************************************

    const handleNew = async () => {
        setIsSubmitted(false);
        setCorrectedText("");
        setText("");
        setSubject(generateString(Math.floor(Math.random() * 10) + 20));
    }

    const handleSubmit = async () => {
        setIsSubmitted(true);
        const response = await axios.post('http://127.0.0.1:8000/grammarCorrection', { text });
        console.log("came", response);
        setText(response.data.corrected_text[0]);
        setIsSubmitted(false);
    }

    return(
        <FullPage class="overflow-y-auto overflow-x-hidden">
            <DraggableButton></DraggableButton>
            <div style={{marginLeft: "17%"}} class="w-8/12">
                <div class="grid cols-12">
                    <div class="col-span-12 flex justify-start mt-5 mb-7 ml-5">
                        <h1>{subject}</h1>
                    </div>
                    {
                        true ?
                            <Wrapper>
                                <div class="col-span-12">
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Your Text"
                                        fullWidth
                                        multiline
                                        rows={23}
                                        onChange={handleChange}
                                        value={text}
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                height: "30%"
                                            }
                                        }}
                                    />
                                </div>
                                <div class="col-span-6 col-start-4 justify-center grid grid-cols-2 gap-4 mb-3 mt-5">
                                    <Button onClick={handleSubmit} disabled={text==="" || isSubmitted} startIcon={<SendIcon></SendIcon>}>GÖNDER</Button>
                                    <Button onClick={handleNew} startIcon={<ReplayIcon></ReplayIcon>}>YENİ</Button>
                                </div>
                            </Wrapper>
                        :
                            <div class="col-span-12">
                                <p>{correctedText}</p>
                            </div>
                    }
                    
                </div>
            </div> 
        </FullPage>
    );
}

export default WritingPage;