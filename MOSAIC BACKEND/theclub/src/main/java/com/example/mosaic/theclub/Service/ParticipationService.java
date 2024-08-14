package com.example.mosaic.theclub.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.mosaic.theclub.Entity.Participation;
import com.example.mosaic.theclub.Repo.ParticipationRepository;



@Service
public class ParticipationService {

    @Autowired
    private ParticipationRepository participationRepository;

    @Autowired
    private JavaMailSender emailSender;

    public Participation saveParticipation(Participation participation) {
        // Save participation details
        Participation savedParticipation = participationRepository.save(participation);

        // Send email
        sendConfirmationEmail(savedParticipation);

        return savedParticipation;
    }

    private void sendConfirmationEmail(Participation participation) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(participation.getEmail());
        message.setSubject("Participation Confirmation");
        message.setText("Hello " + participation.getFullName() + ",\n\n" +
                "Thank you for participating in our event. We have received your details:\n\n" +
                "Full Name: " + participation.getFullName() + "\n" +
                "Institution/Organization: " + participation.getInstitution() + "\n" +
                "Club/Activity: " + participation.getClub() + "\n" +
                "Requirements: " + participation.getRequirements() + "\n" +
                "Emergency Contact: " + participation.getEmergencyContact() + "\n" +
                "Dietary Restrictions: " + participation.getDietaryRestrictions() + "\n" +
                "T-shirt Size: " + participation.getTshirtSize() + "\n\n" +
                "Best regards,\n" +
                "The Team");
        emailSender.send(message);
    }
}


