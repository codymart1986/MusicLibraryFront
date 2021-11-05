import axios from 'axios';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import React, { Component } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [{
        title: '',
        album: '',
        artist: '',
        release_date: ''
      }]
    }
  }

  componentDidMount(){
    this.allSongs();
  }

  async allSongs(){
    
      let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      this.setState({
        songs:response.data
      })
  }

searchSongs = (query) => {
  this.setState({
    songs: query
  })
}

  render() {
    return (
      <div className='container-fluid'>

        <MusicTable songs={this.state.songs} />
        <SearchBar  search={this.state.songs} searchBar={this.searchSongs} />
        
      </div>
      
    )
  }

}


export default App;
