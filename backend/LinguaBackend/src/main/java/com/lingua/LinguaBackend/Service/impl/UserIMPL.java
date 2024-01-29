package com.lingua.LinguaBackend.Service.impl;

import com.lingua.LinguaBackend.Dto.UserDto;
import com.lingua.LinguaBackend.Entity.User;
import com.lingua.LinguaBackend.Repo.UserRepo;
import com.lingua.LinguaBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService {

    @Autowired
    private UserRepo userRepo;
    @Override
    public String addUser(UserDto userDto) {
        User user= new User(
                userDto.getUserId(),
                userDto.getUserName(),
                userDto.getUserEmail(),
                userDto.getUserPassword(),
                userDto.getUserMainLanguage());

        userRepo.save(user);

        return user.getUserName();
    }
    public Optional<User> findUserByEmail(String userEmail) {
        return userRepo.findByEmail(userEmail);
    }
}
