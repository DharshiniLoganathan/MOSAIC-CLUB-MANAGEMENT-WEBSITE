package com.example.mosaic.theclub.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaic.theclub.Entity.User;
import com.example.mosaic.theclub.Service.UserService;
import com.example.mosaic.theclub.Service.EmailService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        emailService.sendSignUpConfirmation(user.getEmail());
        return savedUser;
    }

    @PostMapping("/signin")
    public boolean signIn(@RequestBody User user) {
        if (user.getEmail().equals("dharshiniloganathan07@gmail.com")) {
            return userService.validateAdmin(user.getEmail(), user.getPassword());
        } else {
            return userService.validateUser(user.getEmail(), user.getPassword());
        }
    }
}
