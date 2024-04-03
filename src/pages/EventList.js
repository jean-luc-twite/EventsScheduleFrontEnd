import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Side from '../chat/Side';
import '../Style/eventListStyle.css'

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Function to fetch events from backend when component mounts
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        axios.get('http://localhost:5000/events',events) // Send GET request to retrieve events
            .then(response => {
                // Update state with the retrieved events
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });
    };
  return (
    <div className="flex h-full bg-gray-50">
          {/* Sidebar */}
            <Side />
            <h1>Event List</h1>
            <ul>
                {events.map((event, index) => (
                    <li key={index} className="event-item">
                        <span className="event-details event-title">Title:</span> {event.title} | 
                        <span className="event-details event-description"> Description:</span> {event.description} | 
                        <span className="event-details event-date"> Date:</span> {event.date} | 
                        <span className="event-details event-time"> Time:</span> {event.time}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default EventList

