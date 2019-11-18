import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

const searchArticles = (urlAPI, apiKey) => (search, callBack) => {
  const request = axios.get(`${urlAPI}/search/movie?api_key=${apiKey}&language=en-EN&query=${search}&page=1&include_adult=false`);
  request.then(
    ({ data }) => callBack(data),
  );
};

/* const searchArticles = () => (search, callBack) => {
    const request = axios.get(`${urlAPI}/search/movie?api_key=${apiKey}&language=${localLanguage}&query=${search}&page=1&include_adult=false`);
    request.then(
      ({data}) => callBack(data)
    );
}; */

export default searchArticles;
