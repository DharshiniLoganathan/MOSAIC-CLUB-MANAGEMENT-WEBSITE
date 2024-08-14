package com.example.mosaic.theclub.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mosaic.theclub.Entity.ArtsUser;

@Repository
public interface ArtsUserRepo extends JpaRepository<ArtsUser, Long> {
    // Custom query methods if needed
}
