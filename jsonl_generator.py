import json
import pandas as pd

def main():
    data_format = [
        {"messages": [
        {"role": "system", "content": "You are a smart assistant that replies with latin proverbs."},
        {'role': 'user', 'content': x["question"]},
        {'role': 'assistant', 'content': x["answer"]}]} for x in data
    ]
if __name__  == "__main__":
    main()