package com.lingua.LinguaBackend.Service;

import com.lingua.LinguaBackend.Entity.Word;

import java.util.List;
import java.util.Optional;

public interface WordService {
    List<Word> findWordByLevel(String wordLevel, String wordLanguage);
}
