
import React, { useState } from 'react';
import axios from 'axios';
import './AddSongForm.css';

function AddSongForm({ getAllSongs }) {
  const [songData, setSongData] = useState({
    title: '',
    album: '',
    artist: '',
    genre: '',
    release_date: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSongData({ ...songData, [name]: value });
  };
  const handleAddSong = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/music/', songData);
      getAllSongs();
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  
  return (
    <div className='add-song-container'>
      <h2>Add a Song</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleInputChange}
      />
      <input
        type="text"S
        name="album"
        placeholder="Album"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="release_date"
        placeholder="Release Date"
        onChange={handleInputChange}
      />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
}

export default AddSongForm;
