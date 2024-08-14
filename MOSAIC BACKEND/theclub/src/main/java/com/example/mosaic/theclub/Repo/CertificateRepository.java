package com.example.mosaic.theclub.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mosaic.theclub.Entity.Certificate;
@Repository

public interface CertificateRepository extends JpaRepository<Certificate, String> {
    // You can define custom query methods here if needed
}
