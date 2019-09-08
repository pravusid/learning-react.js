import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import youtubeSearch from 'youtube-api-search';
import { apiKey } from '../api-key';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

// HTML을 만드는 함수형 컴포넌트 생성 (컴포넌트 인스턴스가 아님)
// const App = () => (
//   <div>
//     <SearchBar />
//   </div>
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('pikachu');
  }

  videoSearch(term) {
    youtubeSearch({ key: apiKey, term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChage={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// 컴포넌트에서 생성한 HTML을 받아서 인스턴스화 하고 출력할 대상을 지정하여 출력
ReactDOM.render(<App />, document.querySelector('.container'));
