package com.lingua.LinguaBackend.Service.impl;

import com.lingua.LinguaBackend.Entity.Text;
import com.lingua.LinguaBackend.Repo.TextRepo;
import com.lingua.LinguaBackend.Service.TextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TextIMPL implements TextService {
    @Autowired
    private TextRepo textRepo;

    @Override
    public List<Text> findTextByLevel(String textLevel, String textLanguage) {
        return textRepo.findByLevel(textLevel, textLanguage);
    }
}
