package com.example.mosaic.theclub.Repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mosaic.theclub.Entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
