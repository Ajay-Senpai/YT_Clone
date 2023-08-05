import axios from 'axios';

//const BASE_URL = `https://youtube-v31.p.rapidapi.com/?rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  
  export const fetchFromAPI = async (url) => { 
    //const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    const {data}=await axios.request(options);
    return data;
  }