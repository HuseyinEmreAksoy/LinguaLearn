package com.lingua.LinguaBackend.Repo;

import com.lingua.LinguaBackend.Entity.Text;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface TextRepo extends JpaRepository<Text, Integer> {
    @Query("SELECT t From Text t where t.textLanguage = :textLanguage AND t.textLevel = :textLevel")
    List<Text> findByLevel(@Param("textLevel") String textLevel, @Param("textLanguage") String textLanguage);
}
