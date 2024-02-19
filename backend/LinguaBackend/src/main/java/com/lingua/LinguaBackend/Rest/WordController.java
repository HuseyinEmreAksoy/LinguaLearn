package com.lingua.LinguaBackend.Rest;

import com.lingua.LinguaBackend.Entity.Word;
import com.lingua.LinguaBackend.Service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/word")
public class WordController {

    @Autowired
    private WordService wordService;

    @GetMapping(path = "/findByLevel")
    public ResponseEntity<?> getWordByLevel(@RequestParam String wordLevel, @RequestParam String wordLanguage) {
        Optional<Word> wordOptional = wordService.findWordByLevel(wordLevel, wordLanguage);

        if (wordOptional.isPresent()) {
            return ResponseEntity.ok(wordOptional.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
