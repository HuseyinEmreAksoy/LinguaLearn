package com.lingua.LinguaBackend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "word")
public class Word {

    @Id
    @Column(name = "word_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int wordId;

    @Column(name = "word_word", length = 255)
    private String wordWord;

    @Column(name = "word_position", length = 255)
    private String wordPosition;

    @Column(name = "word_level", length = 2)
    private String wordLevel;

    @Column(name = "word_translation", length = 255)
    private String wordTranslation;

    @Column(name = "word_language", length = 255)
    private String wordLanguage;

    public Word(int wordId, String wordWord, String wordPosition, String wordLevel, String wordTranslation, String wordLanguage) {
        this.wordId = wordId;
        this.wordWord = wordWord;
        this.wordPosition = wordPosition;
        this.wordLevel = wordLevel;
        this.wordTranslation = wordTranslation;
        this.wordLanguage = wordLanguage;
    }

    public int getWordId() {
        return wordId;
    }

    public void setWordId(int wordId) {
        this.wordId = wordId;
    }

    public String getWordWord() {
        return wordWord;
    }

    public void setWordWord(String wordWord) {
        this.wordWord = wordWord;
    }

    public String getWordPosition() {
        return wordPosition;
    }

    public void setWordPosition(String wordPosition) {
        this.wordPosition = wordPosition;
    }

    public String getWordLevel() {
        return wordLevel;
    }

    public void setWordLevel(String wordLevel) {
        this.wordLevel = wordLevel;
    }

    public String getWordTranslation() {
        return wordTranslation;
    }

    public void setWordTranslation(String wordTranslation) {
        this.wordTranslation = wordTranslation;
    }

    public String getWordLanguage() {
        return wordLanguage;
    }

    public void setWordLanguage(String wordLanguage) {
        this.wordLanguage = wordLanguage;
    }

    @Override
    public String toString() {
        return "Word{" +
                "wordId=" + wordId +
                ", wordWord='" + wordWord + '\'' +
                ", wordPosition='" + wordPosition + '\'' +
                ", wordLevel='" + wordLevel + '\'' +
                ", wordTranslation='" + wordTranslation + '\'' +
                ", wordLanguage='" + wordLanguage + '\'' +
                '}';
    }
}
