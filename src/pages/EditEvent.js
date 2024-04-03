import React, { useState } from 'react';
import axios from 'axios';
import '../Style/EditEventStyle.css';
import Side from '../chat/Side';

const EditEvent = ({ eventTitle }) => {
    const [oldTitle, setOldTitle] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleEdit = () => {
        axios.put(`http://localhost:5000/events/edit/${oldTitle}`, {
            new_title: newTitle,
            new_description: description,
            new_date: date,
            new_time: time
        })
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
            <div className="edit-event-container">
                <input 
                    type="text" 
                    value={oldTitle} 
                    onChange={(e) => setOldTitle(e.target.value)} 
                    placeholder="Enter old event title"
                    className="edit-event-input"
                />
                <input 
                    type="text" 
                    value={newTitle} 
                    onChange={(e) => setNewTitle(e.target.value)} 
                    placeholder="Enter new event title"
                    className="edit-event-input"
                />
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Enter event description"
                    className="edit-event-input"
                />
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    className="edit-event-input"
                />
                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    className="edit-event-input"
                />
                <button onClick={handleEdit} className="edit-event-button">Edit Event</button>
            </div>
        </div>
    );
};

export default EditEvent;
