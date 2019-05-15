import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({videos: response.data.items});

  }

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
    <div className='container'>
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <div className="d-flex justify-content-between">
        <div className="mr-2">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="list-group ml-2">
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
