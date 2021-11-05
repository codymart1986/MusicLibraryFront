import React from 'react'
import './MusicTable.css'

const MusicTable = (props) => {
    return ( 
        <div>
            <h2>Song Library</h2>
            <table className="styled-table">
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
                    {props.songs.map((song) => {
                        return(
                            <tr className="active-row">
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.releaseDate}</td>
                            </tr>
                        )}
                        )}
                </tbody>
            </table>
            
        </div>
    );
}


export default MusicTable
