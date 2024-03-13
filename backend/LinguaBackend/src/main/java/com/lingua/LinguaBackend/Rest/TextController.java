package com.lingua.LinguaBackend.Rest;

import com.lingua.LinguaBackend.Entity.Text;
import com.lingua.LinguaBackend.Service.TextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/text")
public class TextController {
    @Autowired
    private TextService textService;

    @GetMapping(path = "/findByLevel")
    public ResponseEntity<?> getTextByLevel(@RequestParam String textLevel, @RequestParam String textLanguage) {
        List<Text> textOptional = textService.findTextByLevel(textLevel, textLanguage);

        if(!textOptional.isEmpty()) {
            return ResponseEntity.ok(textOptional);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
