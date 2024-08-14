// package com.example.mosaic.theclub.Service;

// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.mosaic.theclub.Entity.UserProfile;
// import com.example.mosaic.theclub.Repo.UserProfileRepository;

// @Service
// public class UserProfileService {

//     @Autowired
//     private UserProfileRepository userProfileRepository;

//     public UserProfile saveUserProfile(UserProfile userProfile) {
//         return userProfileRepository.save(userProfile);
//     }

//     public Optional<UserProfile> getUserProfileByEmail(String email) {
//         return userProfileRepository.findByEmail(email);
//     }
// }