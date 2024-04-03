
import axios from 'axios'
import React,{useState} from 'react'
import Side from '../chat/Side';
import '../Style/DeleteEventStylr.css'


const DeleteEvent = () => {
    const [title, setTitle] = useState('');

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/events/${title}`)
            .then(response => {
                console.log(response.data);
                // Handle success, such as updating the UI
            })
            .catch(error => {
                console.error('Error:', error.response.data);
                // Handle error
            });
    };
  return (
    <div className="flex h-full bg-gray-50">
    {/* Sidebar */}
      <Side />
      <div className="delete-event-container">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter event title"
                className="delete-event-input"
            />
            <button onClick={handleDelete} className="delete-event-button">Delete Event</button>
        </div>
  </div>
  )
}

export default DeleteEvent

