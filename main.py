from models.main_mcqa_generator import write_questions, set_models_and_texts_question_answer

def main():
    MCQ_Generator, texts = set_models_and_texts_question_answer()

    output, generated_questions = write_questions(MCQ_Generator, texts.iloc[5].text)
    print(output)
    

if __name__ == "__main__":
    main()
