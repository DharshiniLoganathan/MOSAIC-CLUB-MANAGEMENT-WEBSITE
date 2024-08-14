package com.example.mosaic.theclub.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.mosaic.theclub.Entity.Blog;
import com.example.mosaic.theclub.Repo.BlogRepository;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
@CrossOrigin("http://localhost:3000")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @GetMapping
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    @PostMapping
    public Blog createBlog(@RequestBody Blog blog) {
        return blogRepository.save(blog);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable(value = "id") Long id) {
        return blogRepository.findById(id)
            .map(blog -> ResponseEntity.ok().body(blog))
            .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable(value = "id") Long id, @RequestBody Blog blogDetails) {
        return blogRepository.findById(id)
            .map(blog -> {
                blog.setTitle(blogDetails.getTitle());
                blog.setContent(blogDetails.getContent());
                blog.setAuthor(blogDetails.getAuthor());
                blog.setClub(blogDetails.getClub());
                Blog updatedBlog = blogRepository.save(blog);
                return ResponseEntity.ok().body(updatedBlog);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
public ResponseEntity<Void> deleteBlog(@PathVariable(value = "id") Long id) {
    if (blogRepository.existsById(id)) { // Check if the blog exists
        blogRepository.deleteById(id); // Delete by ID
        return ResponseEntity.noContent().build(); // Return 204 No Content
    } else {
        return ResponseEntity.notFound().build(); // Return 404 Not Found
    }
}

}