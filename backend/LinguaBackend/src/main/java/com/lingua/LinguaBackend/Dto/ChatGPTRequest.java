package com.lingua.LinguaBackend.Dto;

import com.lingua.LinguaBackend.Model.ChatMessage;
import lombok.Data;
import org.hibernate.annotations.SecondaryRow;

import java.util.ArrayList;
import java.util.List;

@Data
public class ChatGPTRequest {
    private String model;

   private List<ChatMessage> messages;
    private int max_tokens=150;
    public ChatGPTRequest(String model, String prompt) {
        this.model = model;
        this.messages = new ArrayList<ChatMessage>() ;
        this.messages.add(new ChatMessage("user", "Please analyze the following question to determine if it is related to grammar. If it is a grammar question, respond in detail according to grammar rules. If it is not, please reply with 'I cannot answer this question as it is not related to grammar'. Respond in the language of the question:\n\n" + prompt));
    }


}
