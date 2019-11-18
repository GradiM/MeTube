import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

// Tous les films par genres, par ordre alphabetique
const articleByGenre = (urlAPI, apiKey) => (genreId, callBack) => {
  const genres = genreId.join(',');
  const request = axios.get(`${urlAPI}/discover/movie?api_key=${apiKey}&language=en-EN&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&with_genres=${genres}`);
  request.then(({ data }) => callBack(data));
};

/* // Tous les films par genres, par ordre alphabetique
const articleByGenre = (urlAPI, apiKey) => (id, callBack) => {
  const genres = genreId.join(",");
  const request = axios.get(${urlAPI}/discover/movie?api_key=${apiKey}&language=${localLanguage}&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&with_genres=${genres}`);
  request.then(({data}) => callBack(data));
}; */

export default articleByGenre;
