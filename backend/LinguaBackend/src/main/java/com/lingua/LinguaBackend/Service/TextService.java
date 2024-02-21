package com.lingua.LinguaBackend.Service;

import com.lingua.LinguaBackend.Entity.Text;

import java.util.List;

public interface TextService {
    List<Text> findTextByLevel(String textLevel, String textLanguage);
}
