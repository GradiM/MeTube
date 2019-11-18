import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

// Tous les films (les plus récents)
const latestArticles = (urlAPI, apiKey) => (callBack) => {
  const currentYear = new Date().getFullYear();
  const request = axios.get(`${urlAPI}/discover/movie?&api_key=${apiKey}&language=en-EN&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${currentYear}`);
  request.then(({ data }) => callBack(data));
};

/* // Tous les films (les plus récents)
const latestArticles = () => (callBack) => {
  const currentYear = new Date().getFullYear();
  const request = axios.get(`${urlAPI}/discover/movie?&api_key=${apiKey}&language=en-EN&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${currentYear}`);
  request.then(({data}) => callBack(data));
}; */

export default latestArticles;
