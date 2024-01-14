from deep_translator import GoogleTranslator
import pandas as pd

def translate_en_to_tr(word: str):
    translated_word = GoogleTranslator(source="auto", 
                                       target="tr").translate(word)
    return translated_word

def main():
    # read words from .csv files
    vocab_ab = pd.read_csv("datasets/en_vocab_ab12.csv", header=0)
    vocab_c = pd.read_csv("datasets/en_vocab_c12.csv", header=0)

    # drop unnecessary features
    vocab_ab.drop(["CoreInventory 1", "CoreInventory 2", "Threshold"],axis=1, inplace=True)
    vocab_c.drop("notes", axis=1, inplace=True)

    # concatenate datasets
    vocab_abc = pd.concat([vocab_ab, vocab_c], ignore_index=True)

    # shuffle dataset
    vocab_abc = vocab_abc.sample(frac=1, random_state=42).reset_index(drop=True)

    # change feature names
    new_column_names = ["Word", "Position", "Level"]
    vocab_abc.columns = new_column_names

    # export dataset to .csv and .excel
    vocab_abc.to_csv("datasets/en_vocabulary_by_level_and_pos.csv", index=False)
    vocab_abc.to_excel("datasets/en_vocabulary_by_level_and_pos.xlsx", index=False)

if __name__ == "__main__":
    main()