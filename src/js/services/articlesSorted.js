import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

// Tous les films plus récent au plus ancien (ou inversement)
const articlesSorted = (urlAPI, apiKey) => (sorted, callBack) => {
  const request = axios.get(`${urlAPI}/discover/movie?api_key=${apiKey}&language=en-EN&sort_by=release_date.${sorted}&include_adult=false&include_video=false&page=1`);
  request.then(({ data }) => callBack(data));
};

/* // Tous les films plus récent au plus ancien (ou inversement)
const articlesSorted = (urlAPI, apiKey) => (order, callBack) => {
  const request = axios.get(${urlAPI}/discover/movie?api_key=${apiKey}&language=${localLanguage}&sort_by=release_date.${sorted}&include_adult=false&include_video=false&page=1`);
  request.then(({data}) => callBack(data));
}; */

export default articlesSorted;
