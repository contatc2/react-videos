import axios from 'axios';

const KEY = 'AIzaSyCvT6euEYJKO_NCqcN9KNmO2uyO2FWGm7s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
