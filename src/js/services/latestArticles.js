import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

// Cette fonction récupère la date courante
function dateNow() {
  const date = new Date();
  const year = date.getFullYear();
  let day = date.getDate();
  let month = (date.getMonth() + 1);

  if (day < 10) day = `0${day}`;

  if (month < 10) month = `0${month}`;

  return `${year}-${month}-${day}`;
}

function firstDateOfYear() {
  const date = new Date();
  const year = date.getFullYear();

  return `${year}-01-01`;
}

// Tous les films (les plus récents)
const latestArticles = (urlAPI, apiKey) => (sorted, callBack) => {
  if (!sorted) {
    const request = axios.get(`${urlAPI}/discover/movie?&api_key=${apiKey}&language=en-EN&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=${dateNow()}`);
    request.then(({ data }) => callBack(data));
  } else {
    const request = axios.get(`${urlAPI}/discover/movie?&api_key=${apiKey}&language=en-EN&sort_by=primary_release_date.${sorted}&include_adult=false&include_video=false&page=1&primary_release_date.gte=${firstDateOfYear()}&primary_release_date.lte=${dateNow()}`);
    request.then(({ data }) => callBack(data));
  }
};

/* // Tous les films (les plus récents)
const latestArticles = () => (callBack) => {
  const currentYear = new Date().getFullYear();
  const request = axios.get(`${urlAPI}/discover/movie?&api_key=${apiKey}&language=en-EN&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${currentYear}`);
  request.then(({data}) => callBack(data));
}; */

export default latestArticles;
