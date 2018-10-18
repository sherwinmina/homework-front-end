import axios from 'axios'



export const fetchGiphies = (searchValue, offSetValue = 0) => {
  const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=9esHiVQCAZzmqiaqg5I6nbcRL86lqdPt&limit=25&offset=${offSetValue}&rating=G`
  if (searchValue) {
    const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=9esHiVQCAZzmqiaqg5I6nbcRL86lqdPt&q=${searchValue}&limit=25&offset=${offSetValue}&rating=G&lang=en`
    return axios.get(SEARCH_URL);
  }

  return axios.get(TRENDING_URL);
}


