import random
from models.trained_models.mcq_generation import MCQGenerator
import pandas as pd 

def set_model_question_answer():
    import nltk
    nltk.download('punkt')

    MCQ_Generator = MCQGenerator(True)

    #texts = pd.read_csv("datasets\cefr_leveled_texts.csv")

    return MCQ_Generator #texts

def write_questions(MCQ_Generator, text):
    generated_questions = MCQ_Generator.generate_mcq_questions(text, 10) 
    letters = ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)"]

    generated_questions = sorted(generated_questions, key=lambda x: len(x.distractors), reverse=True)
    generated_questions = [q for q in generated_questions if len(q.distractors) != 0]

    output = ""
    for number, question in enumerate(generated_questions):
        question_header = f"Q{number + 1}."
        output +=  question_header + " " + question.questionText + "\n"
        choices = question.distractors
        choices.append(question.answerText)
        random.shuffle(choices)

        for index, choice in enumerate(choices):
            output += letters[index] + " " + choice + "\n"

    return output, generated_questions
