package com.lingua.LinguaBackend.Rest;


import com.lingua.LinguaBackend.Dto.UserDto;
import com.lingua.LinguaBackend.Entity.User;
import com.lingua.LinguaBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class userController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDto userDto){
        String id = userService.addUser(userDto);
        return id;
    }

    @GetMapping("/findByEmail")
    public ResponseEntity<?> getUserByEmail(@RequestParam String userEmail){
        Optional<User> userOptional = userService.findUserByEmail(userEmail);

        if (userOptional.isPresent()) {
            return ResponseEntity.ok(userOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
