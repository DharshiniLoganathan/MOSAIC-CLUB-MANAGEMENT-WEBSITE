package com.example.mosaic.theclub.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mosaic.theclub.Entity.Blog;
@Repository
public interface BlogRepository extends JpaRepository<Blog,Long> {

}
