from models.mcqa_generator import write_questions
from models.gesd import correct_grammar
from models.models_datasets import get_qa_model, get_gesd_model

def main():
    MCQ_Generator = get_qa_model()
    GESD_model = get_gesd_model()

    
if __name__ == "__main__":
    main()
