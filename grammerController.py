from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from models.gesd import correct_grammar
from models.models_datasets import get_qa_model, get_gesd_model

app = FastAPI()

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
    GESD_model, tokenizer = get_gesd_model()

@app.get("/grammarCorrection")
async def grammar_correction(text: str):
    GESD_model, tokenizer = get_gesd_model()
    corrected_text = correct_grammar(GESD_model, tokenizer, text, 4)
    print(corrected_text)
    return {"corrected_text": corrected_text}