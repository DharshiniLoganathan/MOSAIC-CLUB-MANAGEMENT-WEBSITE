package com.example.mosaic.theclub.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaic.theclub.Entity.Event;
import com.example.mosaic.theclub.Repo.EventRepository;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getEventsByClub(String club) {
        return eventRepository.findByClub(club);
    }

    public Event createEvent(String club, Event event) {
        event.setClub(club);
        return eventRepository.save(event);
    }

    public Event updateEvent(String club, Long id, Event event) {
        event.setId(id);
        event.setClub(club);
        return eventRepository.save(event);
    }

    public void deleteEvent(String club, Long id) {
        eventRepository.deleteById(id);
    }
}
