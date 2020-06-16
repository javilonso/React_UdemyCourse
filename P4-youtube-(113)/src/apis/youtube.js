import axios from 'axios';
const KEY = 'AIzaSyBSf44POdHH-cJCwLnVZdSKTSb7LkjP6jE';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
})