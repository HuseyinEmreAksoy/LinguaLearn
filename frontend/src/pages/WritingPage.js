import React, { useEffect, useState } from "react";
import FullPage from "../components/Helper/FullPage";
import DraggableButton from "../components/DraggableButton";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ReplayIcon from '@mui/icons-material/Replay';
import {TextField} from "@mui/material";

const WritingPage = () => {

    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");

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
        setText("");
        setSubject("Loading...");

        await delay(1000);

        setSubject(generateString(Math.floor(Math.random() * 10) + 20));
        // setSubject("");
    }

    const handleSubmit = () => {
        //TO-DO: Evaluate text and return sth to user
    }

    return(
        <FullPage class="overflow-y-auto overflow-x-hidden">
            <DraggableButton></DraggableButton>
            <div style={{marginLeft: "17%"}} class="w-8/12">
                <div class="grid cols-12">
                    <div class="col-span-12 flex justify-start mt-5 mb-7 ml-5">
                        <h1>{subject}</h1>
                    </div>
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
                        <Button onClick={handleSubmit} disabled={text===""} startIcon={<SendIcon></SendIcon>}>GÖNDER</Button>
                        <Button onClick={handleNew} startIcon={<ReplayIcon></ReplayIcon>}>YENİ</Button>
                    </div>
                </div>
            </div> 
        </FullPage>
    );
}

export default WritingPage;