package com.example.mosaic.theclub.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.mosaic.theclub.Entity.UserProfile;
import com.example.mosaic.theclub.Repo.UserProfileRepository;

import java.io.IOException;

@RestController
@RequestMapping("/api/userprofile")
@CrossOrigin("http://localhost:3000")
public class UserProfileController {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @GetMapping("/get")
    public ResponseEntity<UserProfile> getProfile(@RequestParam String email) {
        UserProfile profile = userProfileRepository.findByEmail(email);
        return profile != null ? ResponseEntity.ok(profile) : ResponseEntity.notFound().build();
    }

    @PostMapping("/save")
    public ResponseEntity<UserProfile> saveProfile(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("institution") String institution,
            @RequestParam("clubName") String clubName,
            @RequestParam("degree") String degree,
            @RequestParam("dob") String dob,
            @RequestParam("gender") String gender,
            @RequestParam("address") String address,
            @RequestParam(value = "profilePhoto", required = false) MultipartFile profilePhoto
    ) throws IOException {
        UserProfile existingProfile = userProfileRepository.findByEmail(email);
        if (existingProfile == null) {
            existingProfile = new UserProfile();
            existingProfile.setEmail(email);
        }
        existingProfile.setName(name);
        existingProfile.setPhone(phone);
        existingProfile.setInstitution(institution);
        existingProfile.setClubName(clubName);
        existingProfile.setDegree(degree);
        existingProfile.setDob(dob);
        existingProfile.setGender(gender);
        existingProfile.setAddress(address);

        if (profilePhoto != null && !profilePhoto.isEmpty()) {
            existingProfile.setProfilePhoto(profilePhoto.getBytes());
        }

        UserProfile savedProfile = userProfileRepository.save(existingProfile);
        return ResponseEntity.ok(savedProfile);
    }
}