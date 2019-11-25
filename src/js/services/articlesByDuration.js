import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

// Tous les films par durée (ici : 1min au temps choisi par l'utilisateur), par ordre alphabetique
const articlesByDuration = (urlAPI, apiKey) => (sorted, minMinute, maxMinute, callBack) => {
  if (!sorted) {
    const request = axios.get(`${urlAPI}/discover/movie?api_key=${apiKey}&language=en-EN&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&with_runtime.gte=${minMinute}&with_runtime.lte=${maxMinute}`);
    request.then(({ data }) => callBack(data));
  } else {
    const request = axios.get(`${urlAPI}/discover/movie?api_key=${apiKey}&language=en-EN&sort_by=original_title.${sorted}&include_adult=false&include_video=false&page=1&with_runtime.gte=${minMinute}&with_runtime.lte=${maxMinute}`);
    request.then(({ data }) => callBack(data));
  }
};

/* // Tous les films par durée (ici : 1min au temps choisi par l'utilisateur), par ordre alphabetique
const articlesByDuration = (urlAPI, apiKey) => (maxMinute, callBack) => {
  const request = axios.get(${urlAPI}/discover/movie?api_key=${apiKey}&language=${localLanguage}&sort_by=original_title.asc&include_adult=false&include_video=false&page=1&with_runtime.lte=${maxMinute}`);
  request.then(({data}) => callBack(data));
}; */

export default articlesByDuration;
