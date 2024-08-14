package com.example.mosaic.theclub.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.mosaic.theclub.DTO.CertificateDTO;
import com.example.mosaic.theclub.Service.CertificateService;
import com.example.mosaic.theclub.emailrequest.CertificateEmailRequest;



@RestController
@RequestMapping("/api/admin/certificate")
@CrossOrigin("http://localhost:3000")
public class CertificateController {

    @Autowired
    private CertificateService certificateService;

    @PostMapping
    public void createCertificate(@RequestBody CertificateDTO certificateDTO) {
        certificateService.saveCertificate(certificateDTO);
    }

    @PostMapping("/send-email")
    public void sendCertificateEmail(@RequestBody CertificateEmailRequest request) {
        CertificateDTO certificateDTO = new CertificateDTO();
        certificateDTO.setName(request.getName());
        certificateDTO.setEvent(request.getEvent());
        certificateDTO.setClub(request.getClub());
        certificateDTO.setDate(request.getDate());
        certificateService.sendCertificateByEmail(request.getEmail(), certificateDTO);
    }
}
