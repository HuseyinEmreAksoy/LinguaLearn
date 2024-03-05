from fastapi import FastAPI, Body, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from models.gesd import correct_grammar
from models.models_datasets import get_qa_model, get_gesd_model
from models.mcqa_generator import write_questions
import json

app = FastAPI()

class GrammarCorrectionInput(BaseModel):
    text: str

class ReadingInput(BaseModel):
    text: str

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == '__main__':
    # Tüm ağ arayüzlerinden erişime izin ver
    uvicorn.run(app, host="0.0.0.0", port=8082)

@app.get("/")
async def root():
    return {"message": "Hello World"} 


@app.on_event("startup")
async def startup_event():
    global GESD_model, tokenizer, MCQ_Generator
    GESD_model, tokenizer = get_gesd_model()
    MCQ_Generator = get_qa_model()

@app.post("/grammarCorrection")
async def grammar_correction(request: GrammarCorrectionInput):
    corrected_text = correct_grammar(GESD_model, tokenizer, request.text, 4)
    return {"corrected_text": corrected_text}

@app.post("/qaGenerator")
async def qaGenerator(request: Request):
    body_str = await request.body()
    body_json = json.loads(body_str.decode("utf-8"))
    text = body_json.get("text", "")
    output, generated_questions = write_questions(MCQ_Generator, text)

    questions_list = []
    for question in generated_questions:
        questions_list.append({
            "questionText": question.questionText,
            "distractors": question.distractors,
            "answerText": question.answerText
        })
    return questions_list