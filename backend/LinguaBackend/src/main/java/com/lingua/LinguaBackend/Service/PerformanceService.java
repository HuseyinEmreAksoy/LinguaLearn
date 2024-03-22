package com.lingua.LinguaBackend.Service;

import com.lingua.LinguaBackend.Dto.PerformanceDto;
import com.lingua.LinguaBackend.Entity.Performance;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PerformanceService {


    public List<Performance> getLastFivePerformances(int userId, String activityType);

    Performance createPerformance(PerformanceDto request);
}