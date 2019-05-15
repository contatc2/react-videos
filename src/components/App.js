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

  componentDidMount() {
    this.onTermSubmit('cute dogs');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });

  }

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
    <div className='container'>
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <div className="row">
        <div className="col-sm-7">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="list-group col-sm-5">
          <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
