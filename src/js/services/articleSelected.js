import axios from 'axios';
/* import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage"; */

// Détail du film séléctionné
const articleSelected = (urlAPI, apiKey) => (id, callBack) => {
  const request = axios.get(`${urlAPI}/movie/${id}?api_key=${apiKey}&language=en-EN`);
  request.then(({ data }) => callBack(data));
};

/* // Détail du film séléctionné
const articleSelected = (urlAPI, apiKey) => (id, callBack) => {
  const request = axios.get(`${urlAPI}/movie/${id}?api_key=${apiKey}&language=${localLanguage}`);
  request.then(({data}) => callBack(data));
}; */

export default articleSelected;
