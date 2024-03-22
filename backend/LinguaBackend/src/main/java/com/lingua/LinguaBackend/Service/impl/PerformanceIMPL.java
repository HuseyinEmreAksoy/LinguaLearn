package com.lingua.LinguaBackend.Service.impl;

import com.lingua.LinguaBackend.Dto.PerformanceDto;
import com.lingua.LinguaBackend.Entity.Performance;
import com.lingua.LinguaBackend.Entity.User;
import com.lingua.LinguaBackend.Repo.PerformanceRepo;
import com.lingua.LinguaBackend.Repo.UserRepo;
import com.lingua.LinguaBackend.Service.PerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PerformanceIMPL implements PerformanceService {
    @Autowired
    private PerformanceRepo performanceRepository;
    @Autowired
    private UserRepo userRepository;
    public List<Performance> getLastFivePerformances(int userId, String activityType) {
        return performanceRepository.findByUserUserIdAndActivityTypeOrderByDateDesc(userId, activityType, PageRequest.of(0, 5));
    }
    public Performance createPerformance(PerformanceDto request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + request.getUserId()));

        Performance performance = new Performance();
        performance.setUser(user);
        performance.setActivityType(request.getActivityType());
        performance.setCorrectAnswers(request.getCorrectAnswers());
        performance.setWrongAnswers(request.getWrongAnswers());
        performance.setDate(request.getDate());

        return performanceRepository.save(performance);
    }
}
