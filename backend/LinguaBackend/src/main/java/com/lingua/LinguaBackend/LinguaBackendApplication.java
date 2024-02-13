package com.lingua.LinguaBackend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class LinguaBackendApplication {
	@Value("${openai_key}")
	private String openApiKey;
	public static void main(String[] args) {
		SpringApplication.run(LinguaBackendApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate(){
		RestTemplate restTemplate = new RestTemplate();
		restTemplate.getInterceptors().add((request, body, execution) -> {
			request.getHeaders().add("Authorization", "Bearer " + openApiKey);
			return execution.execute(request, body);
		});
		return restTemplate;
	}

}
