import React, {useState} from 'react'
import Side from "../chat/Side";
import axios from 'axios';
import '../Style/createEventStyle.css'


const CreateEvent = () => {
    const [title, SetTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date,setDate] =useState(new Date());
    const [events, setEvents] = useState([]);
    const [time, setTime] = useState('');
    
    const addEvent = () => {
      if (title && description  && date && time) {
        const newPassenger = {
            title,
            description,
            date,
          time,
        };
        setEvents([...events, newPassenger]);
        // Clear input fields
        SetTitle('');
        setDescription('');
        setDate('');
        setTime('');
      }
    };
    const createEventsBackend = () => {
        events.forEach(event => {
            axios.post('http://localhost:5000/events/create', event) // Send POST request with Axios
                .then(response => {
                    console.log('Event created successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error.response.data);
                    // Handle error
                });
        });
    };
  

  return (
    <div className="flex h-full bg-gray-50">
    {/* Sidebar */}
    <Side />
      
    {/* Main content */}
    <div className="flex-1 flex flex-col relative">
    <div className="container">
      <div className="subContainer">
        <h2 className="label">Event Details</h2>
        <input
          type="text"
          className="input"
          placeholder="Enter event title"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Enter description of the event"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="buttonContainer">
        </div>
        <input
          type="date"
          className="input"
          placeholder="select the date"
          value={time}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="input"
          placeholder="Enter the time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button className="proceedButton" onClick={addEvent}>Add event</button>
        
        
        <div className="passengerList">
          {events.map((event, index) => (
            <div key={index} className="passengerListItem">
              <p>Event {index + 1}:</p>
              <p>Title: {event.title}</p>
              <p>Description: {event.description}</p>
              <p>date: {event.date}</p>
              <p>time: {event.time}</p>
            </div>
          ))}
        </div>
        <button className="saveButton" onClick={createEventsBackend}>Create Events</button>
      </div>
    </div>
    </div>
    
  </div>
  )
}

export default CreateEvent

