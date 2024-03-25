package com.lingua.LinguaBackend.Rest;

import com.lingua.LinguaBackend.Dto.PerformanceDto;
import com.lingua.LinguaBackend.Entity.Performance;
import com.lingua.LinguaBackend.Service.PerformanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/performance")
public class PerformanceController {

    @Autowired
    private PerformanceService performanceService;

    @GetMapping("/{userId}/{activityType}")
    public ResponseEntity<List<Performance>> getLastFivePerformances(@PathVariable int userId, @PathVariable String activityType) {
        List<Performance> performances = performanceService.getLastFivePerformances(userId, activityType);
        return ResponseEntity.ok(performances);
    }
    @PostMapping("/savePerformance")
    public ResponseEntity<?> createPerformance(@RequestBody PerformanceDto request) {
        Performance performance = performanceService.createPerformance(request);
        return ResponseEntity.ok(performance);
    }

}

