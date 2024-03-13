import torch
from transformers import T5Tokenizer, T5ForConditionalGeneration

def set_model_grammer_spelling_check():
    model_name = 'models/trained_models/grammer_spelling_checker/c4_200m/weights/checkpoint-4500'
    torch_device = 'cuda' if torch.cuda.is_available() else 'cpu'
    tokenizer = T5Tokenizer.from_pretrained(model_name)
    gesd_model = T5ForConditionalGeneration.from_pretrained(model_name).to(torch_device)
    return gesd_model, tokenizer

def correct_grammar(model, tokenizer, input_text, num_return_sequences):
    torch_device = 'cuda' if torch.cuda.is_available() else 'cpu'   
    batch = tokenizer([input_text],truncation=True,padding='max_length',max_length=64, return_tensors="pt").to(torch_device)
    translated = model.generate(**batch,max_length=64,num_beams=4, num_return_sequences=num_return_sequences, temperature=1.5)
    tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)
    return tgt_text