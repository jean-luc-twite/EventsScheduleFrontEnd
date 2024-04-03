// SearchEvent.js

import React, { useState } from 'react';
import axios from 'axios';
import '../Style/SearchEventStyle.css';
import Side from '../chat/Side';

const SearchEvent = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchEvent = () => {
    axios.get(`http://localhost:5000/events/search?keyword=${keyword}`)
      .then(response => {
        setSearchResult(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex h-full bg-gray-50">
    {/* Sidebar */}
      <Side />
    <div className="search-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter keyword to search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <button className="search-button" onClick={searchEvent}>Search</button>
      <div className="search-result">
        {searchResult.map((event, index) => (
          <div key={index} className="event">
            <p className="event-title">{event.title}</p>
            <p className="event-description">{event.description}</p>
            <p className="event-date">{event.date}</p>
            <p className="event-time">{event.time}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchEvent;
