package com.lingua.LinguaBackend.Service;

import com.lingua.LinguaBackend.Entity.Word;

import java.util.Optional;

public interface WordService {
    public Optional<Word> findWordByLevel(String wordLevel, String wordLanguage);
}
