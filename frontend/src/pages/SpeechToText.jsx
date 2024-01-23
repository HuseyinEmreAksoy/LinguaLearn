import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button, Box, Container } from "@mui/material";
import { PlayArrow, Stop, VolumeUp } from "@mui/icons-material";
import "tailwindcss/tailwind.css";

function SpeechToText() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [savedTranscripts, setSavedTranscripts] = useState([
    "deneme",
    "deneme2",
  ]);
  const [tiklandi, setTiklandi] = useState(false);

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.log("Browser does not support speech recognition.");
    }
  }, []);

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    if (transcript.trim().length > 0) {
        setSavedTranscripts([...savedTranscripts, transcript]);
    }
    resetTranscript();
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: "#FFE5E5" }}
    >
      <Container>
        <Box
          className="w-full md:w-2/3 lg:w-2/3 mx-auto bg-white p-4 rounded shadow-lg"
          style={{ backgroundColor: "#E0AED0" }}
        >
          <h1
            className="text-center text-3xl font-bold mb-4"
            style={{ color: "#756AB6" }}
          >
            Speech to Text English
          </h1>
          <Box
            className="w-full p-2 border border-gray-300 rounded mb-4"
            style={{
              height: "300px",
              overflowY: "auto",
              backgroundColor: "#F5EBEB",
            }}
          >
            {savedTranscripts.map((text, index) => (
              <>
                <p key={index} style={{ color: "#000" }}>
                  {text}
                </p>
                <Button
                  style={{
                    backgroundColor: "#F5EBEB",
                    color: "#756AB6",
                    borderRadius: "50%",
                    minWidth: "40px",
                    width: "40px",
                    height: "40px",
                    padding: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => setTiklandi(true)}
                >
                  <VolumeUp />
                </Button>
              </>
            ))}
            {listening && <p style={{ color: "#000" }}>{transcript}</p>}
          </Box>
          <div className="flex justify-around mb-4">
            {listening ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "#756AB6", color: "#FFF" }}
                onClick={handleStop}
                startIcon={<Stop />}
              >
                Stop
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ backgroundColor: "#AC87C5", color: "#FFF" }}
                onClick={handleStart}
                startIcon={<PlayArrow />}
              >
                Play
              </Button>
            )}
            <Button
              variant="contained"
              style={{ backgroundColor: "#756AB6", color: "#FFF" }}
              onClick={() => resetTranscript() && setSavedTranscripts([])}
            >
              Reset
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default SpeechToText;
