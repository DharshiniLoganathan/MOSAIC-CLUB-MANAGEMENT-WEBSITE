package com.example.mosaic.theclub.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.mosaic.theclub.Entity.Event;
import com.example.mosaic.theclub.Service.EventService;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin("http://localhost:3000")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/{club}")
    public List<Event> getAllEvents(@PathVariable String club) {
        return eventService.getEventsByClub(club);
    }

    @PostMapping("/{club}")
    public Event createEvent(@PathVariable String club, @RequestBody Event event) {
        return eventService.createEvent(club, event);
    }

    @PutMapping("/{club}/{id}")
    public Event updateEvent(@PathVariable String club, @PathVariable Long id, @RequestBody Event event) {
        return eventService.updateEvent(club, id, event);
    }

    @DeleteMapping("/{club}/{id}")
    public void deleteEvent(@PathVariable String club, @PathVariable Long id) {
        eventService.deleteEvent(club, id);
    }
}

