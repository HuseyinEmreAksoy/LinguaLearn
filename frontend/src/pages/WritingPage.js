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

    const [text, setText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
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
                    <div class="col-span-12">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Your Text"
                            fullWidth
                            multiline
                            rows={25}
                            onChange={handleChange}
                            value={text}
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "30%"
                                }
                            }}
                        />
                    </div>
                    <div class="col-span-6 col-start-4 justify-center grid grid-cols-1 gap-4 mb-3 mt-5">
                        {
                            isSubmitted ?
                                <Button onClick={handleSubmit} disabled={true}>YÜKLENİYOR</Button>
                            :
                                <Button onClick={handleSubmit} disabled={text === ""} startIcon={<SendIcon></SendIcon>}>GÖNDER</Button>
                        }
                    </div>
                </div>
            </div> 
        </FullPage>
    );
}

export default WritingPage;