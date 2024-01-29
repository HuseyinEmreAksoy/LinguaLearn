package com.lingua.LinguaBackend.Service;

import com.lingua.LinguaBackend.Dto.UserDto;
import com.lingua.LinguaBackend.Entity.User;

import java.util.Optional;

public interface UserService {
    String addUser(UserDto userDto);

    public Optional <User> findUserByEmail(String userEmail);
}
