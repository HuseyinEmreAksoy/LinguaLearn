package com.lingua.LinguaBackend.Dto;

import com.lingua.LinguaBackend.Model.ChatMessage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.net.ContentHandler;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatGPTResponse {
    private List<Choice> choices;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Choice {

        private int index;

        private ChatMessage message;

    }
}
