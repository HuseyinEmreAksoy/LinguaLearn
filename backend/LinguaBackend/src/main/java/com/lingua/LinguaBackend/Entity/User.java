package com.lingua.LinguaBackend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    @Column(name = "user_name", length = 255)
    private String userName;

    @Column(name = "user_Email", length = 255)
    private String userEmail;

    @Column(name = "user_password", length = 255)
    private String userPassword;

    @Column(name = "user_mainLanguage", length = 255)
    private String userMainLanguage;


    public User(int userId, String userName, String userEmail, String userPassword, String userMainLanguage) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userMainLanguage = userMainLanguage;
    }

    public User() {
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
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userMainLanguage='" + userMainLanguage + '\'' +
                '}';
    }
}
