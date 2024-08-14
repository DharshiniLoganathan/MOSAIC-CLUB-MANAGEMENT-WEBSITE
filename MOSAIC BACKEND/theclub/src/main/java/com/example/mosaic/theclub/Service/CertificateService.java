package com.example.mosaic.theclub.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.mosaic.theclub.DTO.CertificateDTO;
import com.example.mosaic.theclub.Entity.Certificate;
import com.example.mosaic.theclub.Repo.CertificateRepository;

@Service
public class CertificateService {

    @Autowired
    private CertificateRepository certificateRepository;

    @Autowired
    private JavaMailSender mailSender;

    public void saveCertificate(CertificateDTO certificateDTO) {
        Certificate certificate = new Certificate();
        certificate.setName(certificateDTO.getName());
        certificate.setEvent(certificateDTO.getEvent());
        certificate.setClub(certificateDTO.getClub());
        certificate.setDate(certificateDTO.getDate());
        certificateRepository.save(certificate);
    }

    public void sendCertificateByEmail(String email, CertificateDTO certificateDTO) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Congratulations!");
        message.setText("Dear " + certificateDTO.getName() + ",\n\n" +
                "Congratulations on successfully completing the " + certificateDTO.getEvent() + " for the " + certificateDTO.getClub() + " on " + certificateDTO.getDate() + ".\n\n" +
                "Best regards,\nYour Team");

        try {
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace(); // Log or handle the exception
            throw new RuntimeException("Failed to send email");
        }
    }
}
