package com.lingua.LinguaBackend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "text")
public class Text {
    @Id
    @Column(name = "text_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int textId;

    @Lob
    @Column(name = "text_text", length = 1024)
    private String textText;

    @Column(name = "text_level", length = 2)
    private String textLevel;

    @Column(name = "text_language", length = 255)
    private String textLanguage;

    public Text(int textId, String textText, String textLevel, String textLanguage) {
        this.textId = textId;
        this.textText = textText;
        this.textLevel = textLevel;
        this.textLanguage = textLanguage;
    }

    public Text() {
    }

    public int getTextId() {
        return textId;
    }

    public void setTextId(int textId) {
        this.textId = textId;
    }

    public String getTextText() {
        return textText;
    }

    public void setTextText(String textText) {
        this.textText = textText;
    }

    public String getTextLevel() {
        return textLevel;
    }

    public void setTextLevel(String textLevel) {
        this.textLevel = textLevel;
    }

    public String getTextLanguage() {
        return textLanguage;
    }

    public void setTextLanguage(String textLanguage) {
        this.textLanguage = textLanguage;
    }

    @Override
    public String toString() {
        return "Text{" +
                "textId=" + textId +
                ", textText='" + textText + '\'' +
                ", textLevel='" + textLevel + '\'' +
                ", textLanguage='" + textLanguage + '\'' +
                '}';
    }
}