import './MusicTable.css';
import React from 'react';
import axios from 'axios';

function MusicTable({ songs, onDeleteSong}) {
    const handleDelete = async (songId) => {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/music/${songId}/`);
          onDeleteSong(songId);
        } catch (error) {
          console.error('Error deleting song:', error);
        }
      };
  return (
    <div className="music-table-container">
        <table className="music-table">
            <thead>
                <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(song => (
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <td>
                    <button onClick={() => handleDelete(song.id)}>Delete</button> 
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default MusicTable;
