import { Button } from "@mui/material";
import FlashCard from "../components/FlashCard";
import FullPage from "../components/Helper/FullPage"
import { useState } from "react";
const VocabularyPage = (props) => {

    // TO-DO: 6 words will be given per page. A word will contain 2 string ["front", "back"]
    const dummyWords = [["Mouse", "Fare"], ["Yellow", "Sarı"], ["Backpack", "Sırt Çantası"], ["Apple", "Elma"], ["Water", "Su"], ["Who", "Kim"]];
    const [words, setWords] = useState(dummyWords);

    const handleSubmit = () => {
        console.log("hello World!");
    }    

    let cardElements = [];
    if(words.length === 0) {
        let loadingFlashCard = <FlashCard front="Yükleniyor..." back="Yükleniyor..."></FlashCard>
        for(let i = 0; i < 6; i++) {
            cardElements.push(loadingFlashCard);
        }
    }
    else {
        cardElements = words.map((element) => {return(<FlashCard front={element[0]} back={element[1]}></FlashCard>);});
    }

    return(
        <FullPage>
            <div class="w-9/12 bg-red grid grid-cols-3 gap-8">
                {cardElements}
            </div>
            <Button onClick={handleSubmit} disabled={words.length === 0}>SUBMIT</Button>
        </FullPage>
    );
}

export default VocabularyPage;