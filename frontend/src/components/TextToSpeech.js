import { Button, MenuItem, FormControl, Select } from "@mui/material";
import React, { useState, useEffect } from "react";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { InputLabel } from "@mui/material";

const TextToSpeech = (props) => {
  const allVoices = window.speechSynthesis.getVoices().filter((voice) => {return voice.name.includes(props.language);});
  const listeningLimit = 2;

  const [isPaused, setIsPaused] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(allVoices[0]);
  const [numberOfTimesListened, setNumberOfTimesListened] = useState(0);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(props.text);
    const voices = synth.getVoices();

    setUtterance(u);
    setVoice(voices[0]);

    return () => {
      synth.cancel();
    };
  }, [props.text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if(!isStarted) {
      utterance.voice = voice;
      utterance.addEventListener("end", handleStop);
      synth.speak(utterance);
      setIsStarted(true);
    }
    else if (isPaused) {
      synth.resume();
    } 

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    setNumberOfTimesListened(numberOfTimesListened + 1);
    setIsStarted(false);
    setIsPaused(true);
  }

  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value));
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Voice:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={voice}
          label="Voice:"
          onChange={handleVoiceChange}
        >
          {allVoices.map((voice) => (
            <MenuItem key={voice.name} value={voice.name}>
              {voice.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {
        isPaused ? 
          <Button onClick={handlePlay} startIcon={<PlayCircleIcon></PlayCircleIcon>}>{isStarted ? "Devam Ettir" : "Başlat"}</Button>
        :
          <Button onClick={handlePause} startIcon={<PauseCircleIcon></PauseCircleIcon>}>Duraklat</Button>
      }
    </div>
  );
};

export default TextToSpeech;