import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SpeechToText() {
    const { transcript, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
        console.log("SpeechRecognition started");
    }, []);

    return (
        <div>
            <h1>Speech to Text English</h1>
            <form>
                <textarea
                    value={transcript}
                />
                <button type="button" onClick={resetTranscript}>Reset</button>
                <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
            </form>
        </div>
    );
};

export default SpeechToText;
