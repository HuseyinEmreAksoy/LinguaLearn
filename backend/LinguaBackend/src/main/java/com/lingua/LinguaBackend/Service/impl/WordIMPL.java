package com.lingua.LinguaBackend.Service.impl;

import com.lingua.LinguaBackend.Entity.Word;
import com.lingua.LinguaBackend.Repo.WordRepo;
import com.lingua.LinguaBackend.Service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WordIMPL implements WordService {
    @Autowired
    private WordRepo wordRepo;

    @Override
    public List<Word> findWordByLevel(String wordLevel, String wordLanguage) {
        return wordRepo.findByLevel(wordLevel, wordLanguage);
    }
}
