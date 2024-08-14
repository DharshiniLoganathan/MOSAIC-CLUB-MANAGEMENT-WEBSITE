package com.example.mosaic.theclub.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaic.theclub.Entity.User;
import com.example.mosaic.theclub.Repo.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private static final String ADMIN_PASSWORD = "admin@017"; // Change this to your specific admin password

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean validateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    public boolean validateAdmin(String email, String password) {
        return "dharshiniloganathan07@gmail.com".equals(email) && ADMIN_PASSWORD.equals(password); // Use your admin email and password
    }
}
