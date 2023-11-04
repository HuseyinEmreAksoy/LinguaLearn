import pandas as pd
from json import dumps
def main():
    # load data 
    data = pd.read_csv("datasets\en_vocabulary_by_level_and_pos.csv")

    # format data
    qa_format = [
        {
            "messages": [
                {"role": "system", "content": "A vocabulary assistant that replies with translations in Turkish as you ask in English."},
                {'role': 'user', 'content': row["Word"]},
                {'role': 'assistant', 'content': row["Translation"]}
            ]
        } 
        for index, row in data.iterrows()
    ]

    file_path = "./json_files/jsonl_vocab.jsonl"

    # Write the data list to a JSONL file
    with open(file_path, 'w') as jsonl_file:
        for pair in qa_format:
            jsonl_file.write(dumps(pair) + '\n')

if __name__  == "__main__":
    main()