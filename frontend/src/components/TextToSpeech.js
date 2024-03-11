import { Button, MenuItem, FormControl, Select, IconButton, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { InputLabel } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';

const TextToSpeech = (props) => {
	const allVoices = window.speechSynthesis.getVoices().filter((voice) => { return voice.name.includes(props.language); });
	const listeningLimit = 2;

	const [isPaused, setIsPaused] = useState(true);
	const [isStarted, setIsStarted] = useState(false);
	const [utterance, setUtterance] = useState(null);
	const [voice, setVoice] = useState(allVoices[0]);
	const [numberOfTimesListened, setNumberOfTimesListened] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

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
		utterance.voice = voice;
		synth.speak(utterance);

		if (!isStarted) {
			utterance.addEventListener("end", handleStop);
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
		<div class="grid cols-12">
			<div class="col-start-1 col-span-11">
				<FormControl fullWidth>
					<InputLabel>Aksan:</InputLabel>
					<Select
						value={voice}
						label="Voice:"
						onChange={handleVoiceChange}
						size="small"
						defaultValue=""
					>
						{allVoices.map((voice) => (
							<MenuItem key={voice.name} value={voice.name}>
								{voice.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div class="col-start-12">
				{
					isPaused ?
						<div>
							<IconButton disabled={numberOfTimesListened >= listeningLimit} onClick={handlePlay}>
								<PlayCircleIcon></PlayCircleIcon>
							</IconButton>
						</div>
						:
						<IconButton onClick={handlePause}>
							<PauseCircleIcon></PauseCircleIcon>
						</IconButton>
				}
			</div>
			<div class="col-span-12 mt-2">
				<Alert severity="info">Metni en fazla {listeningLimit} kere dinleyebilirsin!</Alert>
			</div>
		</div>
	);
};

export default TextToSpeech;