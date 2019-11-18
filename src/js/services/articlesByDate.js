import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

// Tous les films par rapport à la date, par ordre alphabetique
const articlesByDate = (urlAPI, apiKey) => (year, callBack) => {
  const request = axios.get(`${urlAPI}/discover/movie?api_key=${apiKey}&language=en-EN&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&primary_release_year=${year}`);
  request.then(({ data }) => callBack(data));
};

/* // Tous les films par rapport à la date, par ordre alphabetique
const articlesByDate = (urlAPI, apiKey) => (year, callBack) => {
  const request = axios.get(${urlAPI}/discover/movie?api_key=${apiKey}&language=${localLanguage}&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&primary_release_year=${year}`);
  request.then(({data}) => callBack(data));
}; */

export default articlesByDate;
