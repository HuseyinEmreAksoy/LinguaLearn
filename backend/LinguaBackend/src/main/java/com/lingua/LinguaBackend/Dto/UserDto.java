package com.lingua.LinguaBackend.Dto;


import jakarta.persistence.Column;

public class UserDto {

    private int userId;
    private String userName;
    private String userEmail;
    private String userPassword;
    private String userMainLanguage;

    public UserDto(int userId, String userName, String userEmail, String userPassword, String userMainLanguage) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userMainLanguage = userMainLanguage;
    }

    public UserDto() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserMainLanguage() {
        return userMainLanguage;
    }

    public void setUserMainLanguage(String userMainLanguage) {
        this.userMainLanguage = userMainLanguage;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userMainLanguage='" + userMainLanguage + '\'' +
                '}';
    }
}
