package com.example.mosaic.theclub.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaic.theclub.Entity.ArtsUser;
import com.example.mosaic.theclub.Repo.ArtsUserRepo;

@Service
public class ArtsUserService {

    @Autowired
    private ArtsUserRepo artsUserRepo;

    public boolean addArtsUserToClub(ArtsUser artsUser) {
        // Logic to add user to the club
        artsUserRepo.save(artsUser);
        return true;
    }

    public boolean removeArtsUserFromClub() {
        // Logic to remove user from the club
        // Assuming you have a way to identify the current user
        ArtsUser artsUser = getCurrentArtsUser();
        if (artsUser != null) {
            artsUserRepo.delete(artsUser);
            return true;
        }
        return false;
    }

    public boolean checkArtsUserMembership() {
        // Check if the user is a member of the club
        ArtsUser artsUser = getCurrentArtsUser();
        return artsUser != null;
    }

    private ArtsUser getCurrentArtsUser() {
        // Method to get the current user, e.g., from the session or security context
        // Placeholder implementation
        return artsUserRepo.findById(1L).orElse(null); // Modify as needed
    }
}