package com.lingua.LinguaBackend.Repo;

import com.lingua.LinguaBackend.Entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface WordRepo extends JpaRepository<Word, Integer> {
    @Query("SELECT w FROM Word w where w.wordLanguage = :wordLanguage AND w.wordLevel = :wordLevel")
    List<Word> findByLevel(@Param("wordLevel") String wordLevel, @Param("wordLanguage") String wordLanguage);
}