# LinguaLearn
2023-2024 Spring Computer Science Final Project TOBB University of Economics and Technologies
## Introduction
We believe that learning a new language opens doors to understanding different cultures, perspectives, and a world of opportunities. That's why we've created an online platform powered by the latest in transformer models. Our comprehensive approach encompasses reading, writing, listening, speaking all designed for our users. Whether you're a beginner aiming to lay a solid foundation or an advanced learner seeking to refine your skills, LinguaLearn offers a rich, interactive experience that makes language learning engaging, effective, and fun. You can improve your language skills from other aspects of the language you prefer. We will keep track of your learning progress.
## Content
#### Reading
Our fine-tuned transformer models will generate multiple choice questions for the user from level based text from our database. The user will pick one of the answers for each question that is according to the text.
![Screenshot from development.](/images/reading_ui.jpg)
#### Speaking
Using Google API, the user can give permission for the microphone to the browser and our speaking section page will listen. It will automatically transform the speech to the text and help you with the accent of the language.
![Screenshot from development.](/images/speaking_ui.jpg)
#### Listening
Once again with the help of Google API, the user can write a text and listen the given text by a variety of different accents specific to that language.
![Screenshot from development.](/images/listening_ui.jpg)
#### Writing
Our other fine-tuned transformer model, takes the user input and outputs the corrected version. The given text can either have grammar or spelling errors.
![Screenshot from development.](/images/writing_ui.jpg)
#### Flash Card
In this part, we have a fun interface with the most used words in that language. You will click onto a flash card and it will reveal correct if it is correctly translated by the user.
![Screenshot from development.](/images/flash_card_ui.jpg)
#### Chat Box
With the help of ChatGPT, we have integrated and fine-tuned GPT to our purpose and it will be ready to chat for your desire. You can learn other prospects and sides of the language you want to learn.
![Screenshot from development.](/images/chat_box_ui.jpg)
## Datasets
Scraped and generated data is provided under `scraped_datasets` directory.
Other public datasets are as given below
| Vectors              |   Size | Description                  | 📥 Download |
| -------------------- | -----: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `s2v_reddit_2015_md` | 573 MB | Reddit comments 2015         | [link](https://github.com/explosion/sense2vec/releases/download/v1.0.0/s2v_reddit_2015_md.tar.gz) |
| `C4 200M` | 49.37 GB | Synthetic dataset for GEC task with 185 million sentence pairs| [link](https://www.kaggle.com/datasets/dariocioni/c4200m)
| `multilingual-gec` | 31.08 MB | Dataset Card for Multilingual Grammar Error Correction| [link](https://huggingface.co/datasets/juancavallotti/multilingual-gec)
| `RACE` | 83 MB | Large-scale reading comprehension dataset| [link](https://huggingface.co/datasets/ehovy/race)
| `SQuAD` | 44 MB | Stanford Question Answering Dataset | [link](https://rajpurkar.github.io/SQuAD-explorer/)

## Models
[T5 Transformers](https://github.com/google-research/text-to-text-transfer-transformer)
#### Multiple Choice Question Generator
A user-friendly and comprehensible algorithm for generating multiple-choice questions is implemented using T5 Transformers. This tool takes a brief text passage as input and employs two finely-tuned T5 Transformer models. Initially, it creates various question-answer pairs based on the provided text. Subsequently, it utilizes these pairs to generate distractors, additional options designed to perplex the test-taker. \
![Screenshot from development.](/images/mcqa_output.jpg)
#### Grammar and Spelling Correction 
Fine-tuned multilingual T5 Transformer model for correcting grammar and spelling errors. It accepts a sentence as an input and returns the corrected version. \
![Screenshot from development.](/images/gec_output.jpg)

## Technologies
