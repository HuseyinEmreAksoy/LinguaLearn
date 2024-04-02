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
<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108890-200809d1-439c-4e23-90d3-b090cf9a4eea.png" alt="IntelliJ" title="IntelliJ"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Material UI" title="Material UI"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="Java" title="Java"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png" alt="Spring Boot" title="Spring Boot"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117207493-49665200-adf4-11eb-808e-a9c0fcc2a0a0.png" alt="Hibernate" title="Hibernate"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183911547-990692bc-8411-4878-99a0-43506cdb69cf.png" alt="GCP" title="GCP"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="TensorFlow" title="TensorFlow"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/186884150-05e9ff6d-340e-4802-9533-2c3f02363ee3.png" alt="Windows" title="Windows"/></code>
  <code><img width="50" src="https://raw.githubusercontent.com/onemarc/tech-icons/8ba629e8d2956306e6e8a95d5cb5a7502a99087d/icons/pytorch-light.svg" alt="Torch" title="Torch"/></code>
  <code><img width="50" src="https://github.com/tandpfun/skill-icons/blob/main/icons/ScikitLearn-Dark.svg" alt="Scikit" title="scikit-learn"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183914128-3fc88b4a-4ac1-40e6-9443-9a30182379b7.png" alt="Jupyter Notebook" title="Jupyter Notebook"/></code>
  <code><img width="50" src="https://github.com/tandpfun/skill-icons/blob/main/icons/Anaconda-Dark.svg" alt="Conda" title="Conda"/></code>
  <code><img width="50" src="https://github.com/tandpfun/skill-icons/blob/main/icons/Npm-Dark.svg" alt="NPM" title="NPM"/</code>
  <code><img width="50" src="https://github.com/tandpfun/skill-icons/blob/main/icons/PyCharm-Dark.svg" alt="PyCharm" title="PyCharm"/</code>
</div>

