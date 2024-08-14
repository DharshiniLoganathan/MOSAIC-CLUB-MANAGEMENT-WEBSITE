package com.example.mosaic.theclub.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaic.theclub.Entity.ArtsUser;
import com.example.mosaic.theclub.Service.ArtsUserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtsUserController {

    @Autowired
    private ArtsUserService artsUserService;

    @PostMapping("/artsjoin-club")
    public ResponseEntity<?> joinClub(@RequestBody ArtsUser artsUser) {
        boolean success = artsUserService.addArtsUserToClub(artsUser);
        return success ? ResponseEntity.ok(Map.of("success", true)) : ResponseEntity.badRequest().body(Map.of("success", false));
    }

    @PostMapping("/leave-club")
    public ResponseEntity<?> leaveClub() {
        boolean success = artsUserService.removeArtsUserFromClub();
        return success ? ResponseEntity.ok(Map.of("success", true)) : ResponseEntity.badRequest().body(Map.of("success", false));
    }

    @GetMapping("/check-membership")
    public ResponseEntity<?> checkMembership() {
        boolean hasJoined = artsUserService.checkArtsUserMembership();
        return ResponseEntity.ok(Map.of("hasJoined", hasJoined));
    }
}
