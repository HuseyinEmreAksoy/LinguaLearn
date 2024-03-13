from models.mcqa_generator import write_questions
from models.gesd import correct_grammar
from models.models_datasets import get_qa_model, get_gesd_model

def main():
    #MCQ_Generator = get_qa_model()
    text_corrector = get_gesd_model()

    input_text = "My brother thinked he lost his keys, so we looked everywhere for them. He finally finded them in the refrigerator, which was very strange. We couldn't stopped laughing about it. Later, he sayed he was too embarrassed to tell anyone else."
    text = get_correct_text_recursively(get_gesd_model()["model"], get_gesd_model()["tokenizer"], input_text)
    print(text)

def get_correct_text_recursively(model, tokenizer, input_text):
    texts = correct_grammar(get_gesd_model()["model"], get_gesd_model()["tokenizer"], input_text, 4)
    possible_text = {}
    for text in texts:
        temp = correct_grammar(get_gesd_model()["model"], get_gesd_model()["tokenizer"], text, 4)
        temp.append(text)
        for t in temp:
            if t in possible_text.keys():
                possible_text[t] +=1
            else:
                possible_text[t] = 1

    return max(possible_text, key=possible_text.get)

if __name__ == "__main__":
    main()
