import axios from 'axios';
import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        const data = {
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            genre: this.state.genre,
            releaseDate: this.state.releaseDate,
        };
        axios.post("http://localhost:3000/api/songs", data)
    }

    render(){
        return(
            <div className="form">
                <form className="post" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Album</label>
                        <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                    </div>
                    <div>
                        <label>Artist</label>
                        <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                    </div>
                    <div>
                        <label>Genre</label>
                        <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                    </div>
                    <div>
                        <label>Release Date(mm/dd/yyyy)</label>
                        <input type="text" name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate}/>
                    </div>
                    <button type="submit">Add Song to Library</button>
                </form>
            </div>
        )
    }
}

export default CreateForm