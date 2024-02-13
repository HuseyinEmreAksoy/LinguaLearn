package com.lingua.LinguaBackend.Service;

import com.lingua.LinguaBackend.Dto.ChatGPTRequest;
import com.lingua.LinguaBackend.Dto.ChatGPTResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
public class OpenAIAPIController {
    @Value("${openai.api.model}")
    private String model;
    @Value("${openai.api.url}")
    private String url;
    @Autowired
    private RestTemplate restTemplate;

    @PostMapping("/chat")
    public String chat(@RequestBody String prompt){
        ChatGPTRequest chatGPTRequest = new ChatGPTRequest(model, prompt);

        ChatGPTResponse chatGPTResponse = restTemplate.postForObject(url, chatGPTRequest, ChatGPTResponse.class);

        return chatGPTResponse.getChoices().get(0).getMessage().getContent();
    }
}
