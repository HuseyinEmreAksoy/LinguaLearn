package com.lingua.LinguaBackend.Dto;

import java.time.LocalDate;

public class PerformanceDto {
    private String activityType;
    private int correctAnswers;
    private int wrongAnswers;
    private LocalDate date;
    private int userId;

    public PerformanceDto(String activityType, int correctAnswers, int wrongAnswers, LocalDate date, int userId) {
        this.activityType = activityType;
        this.correctAnswers = correctAnswers;
        this.wrongAnswers = wrongAnswers;
        this.date = date;
        this.userId = userId;
    }

    public PerformanceDto() {
    }

    @Override
    public String toString() {
        return "PerformanceDto{" +
                "activityType='" + activityType + '\'' +
                ", correctAnswers=" + correctAnswers +
                ", wrongAnswers=" + wrongAnswers +
                ", date=" + date +
                ", userId=" + userId +
                '}';
    }

    public String getActivityType() {
        return activityType;
    }

    public void setActivityType(String activityType) {
        this.activityType = activityType;
    }

    public int getCorrectAnswers() {
        return correctAnswers;
    }

    public void setCorrectAnswers(int correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    public int getWrongAnswers() {
        return wrongAnswers;
    }

    public void setWrongAnswers(int wrongAnswers) {
        this.wrongAnswers = wrongAnswers;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
