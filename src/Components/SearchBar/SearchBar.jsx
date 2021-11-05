import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
        search:""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(song => {
            if (song.title.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.album.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.artist.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.genre.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.releaseDate.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
        });
        this.setState({
            search:""
        })
        this.props.searchBar(results)   
    }

    render(){

        return (  
            
        <center>
            <form onSubmit={this.handleSubmit}>
            <div className="search">
                    <input placeholder="Title, Artist, Album, Genre, Release date(mm/dd/yyyy)" type='text' name="searchTerm" size="50" value={this.state.searchTerm} onChange={this.handleChange}/> 
                    <input type="button" value="search" type="submit" />
                </div>
            </form>
        </center>    
        
    );
}
}

export default SearchBar