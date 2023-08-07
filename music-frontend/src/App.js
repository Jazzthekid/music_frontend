import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable';
import FilterBar from './components/FilterBar';
import AddSongForm from './components/AddSongForm';
import './components/Styles.css';

function App() {

  const[songs, setSongs] = useState([]);
  const [filterBy, setFilterBy] = useState ('title');
  const handleDeleteSong = (deletedSongId) => {
    setSongs(songs.filter(song => song.id !== deletedSongId));
  };

  

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/api/music/');
  setSongs(response.data)
  }  

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };
  
  const filteredSongs = songs.sort((a, b) => a[filterBy].localeCompare(b[filterBy]));

return (
  <div>
    <FilterBar onFilterChange={handleFilterChange} />
    <div className="content-container">
      <MusicTable songs={filteredSongs} onDeleteSong={handleDeleteSong}/>
      <AddSongForm getAllSongs={getAllSongs} /> 
    </div>
  </div>
);


}

export default App;
