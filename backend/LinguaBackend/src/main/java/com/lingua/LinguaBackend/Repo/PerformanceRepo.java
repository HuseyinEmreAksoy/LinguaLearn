package com.lingua.LinguaBackend.Repo;

import com.lingua.LinguaBackend.Entity.Performance;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface PerformanceRepo extends JpaRepository<Performance, Integer> {
    List<Performance> findByUserUserIdAndActivityTypeOrderByDateDesc(int userId, String activityType, PageRequest of);
}
