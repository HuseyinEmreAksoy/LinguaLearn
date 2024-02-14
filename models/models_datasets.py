from models.gesd import set_model_grammer_spelling_check
from models.mcqa_generator import set_model_question_answer
import pandas as pd


QA_MODEL = None
def get_qa_model():
    global QA_MODEL
    if QA_MODEL is None:
        QA_MODEL = set_model_question_answer()
    return QA_MODEL

GESD_MODEL = None
TOKENIZER = None
def get_gesd_model():
    global GESD_MODEL
    global TOKENIZER
    if GESD_MODEL is None or TOKENIZER is None:
        GESD_MODEL, TOKENIZER = set_model_grammer_spelling_check()
    return GESD_MODEL, TOKENIZER

LEVELED_TEXTS = None
def get_leveled_texts():
    global LEVELED_TEXTS
    if LEVELED_TEXTS is None:
        LEVELED_TEXTS = pd.read_csv("..\datasets\cefr_leveled_texts.csv")
    return LEVELED_TEXTS