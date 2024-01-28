import random
import numpy as np
import torch
from textwrap3 import wrap

def set_seed(seed: int):
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed_all(seed)

def set_device(summary_model):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    summary_model = summary_model.to(device)
    return summary_model, device

def print_texts(text, summarized_text):
    print ("\noriginal Text >>")
    for wrp in wrap(text, 150):
      print (wrp)
    print ("\n")
    print ("Summarized Text >>")
    for wrp in wrap(summarized_text, 150):
      print (wrp)
    print ("\n")