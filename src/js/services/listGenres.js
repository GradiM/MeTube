import axios from "axios";
import urlAPI from "../constants/urlAPI";
import apiKey from "../constants/apiKey";
import localLanguage from "../constants/localLanguage";

const genreList = (callBack) => {
  const request = axios.get(`${urlAPI}/genre/movie/list?api_key=${apiKey}&language=${localLanguage}`);
  request.then(
    ({ data }) => callBack(data),
  );
};

export default genreList;