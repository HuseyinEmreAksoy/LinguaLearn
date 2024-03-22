import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import DraggableButton from "../components/DraggableButton";

const WritingPage = () => {
    const [text, setText] = useState("");
    const [correctedText, setCorrectedText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [viewMode, setViewMode] = useState("full"); // "full" for full page, "split" for split view

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async () => {
        setIsSubmitted(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/grammarCorrection', { text });
            setCorrectedText(response.data.corrected_text);
            setViewMode("split");
        } catch (error) {
            console.error("Error:", error);
        }
        setIsSubmitted(false);
    };

    return (
        <Box className="min-h-screen bg-gray-100 p-5">
            <DraggableButton />
            <Typography variant="h4" textAlign="center" color="deepPurple" gutterBottom>
                Yazım Düzeltme
            </Typography>
            <Box className={`container mx-auto ${viewMode === "split" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}`}>
                <TextField
                    id="original-text"
                    label="Metniniz"
                    multiline
                    rows={16}
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    placeholder="Metninizi buraya yazınız..."
                    sx={{ backgroundColor: 'white' }}
                />
                {viewMode === "split" && correctedText && (
                    <TextField
                        id="corrected-text"
                        label="Düzeltilmiş Metin"
                        multiline
                        rows={16}
                        variant="outlined"
                        value={correctedText}
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                        margin="normal"
                        sx={{ backgroundColor: 'white' }}
                    />
                )}
            </Box>
            <Box className="flex justify-center mt-4">
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    disabled={text === "" || isSubmitted}
                    startIcon={<SendIcon />}
                    sx={{ mt: 2 }}
                >
                    {isSubmitted ? "İşlenliyor..." : "Gönder"}
                </Button>
            </Box>
        </Box>
    );
};

export default WritingPage;
