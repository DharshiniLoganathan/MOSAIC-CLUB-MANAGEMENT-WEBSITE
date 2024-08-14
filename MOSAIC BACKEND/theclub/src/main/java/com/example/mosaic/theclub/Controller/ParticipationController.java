package com.example.mosaic.theclub.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mosaic.theclub.Entity.Participation;
import com.example.mosaic.theclub.Service.ParticipationService;



@RestController
@RequestMapping("/api/participation-form")
@CrossOrigin(origins = "http://localhost:3000")
public class ParticipationController {

    @Autowired
    private ParticipationService participationService;

    @PostMapping
    public Participation submitParticipation(@RequestBody Participation participation) {
        return participationService.saveParticipation(participation);
    }
}

