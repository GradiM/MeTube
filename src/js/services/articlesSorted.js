import showArticles from './showArticles';
// Tous les films plus récent au plus ancien (ou inversement)
/* const articlesSorted = (urlAPI, apiKey) => (sorted = null, callBack) => {
  const request = axios.get(`${urlAPI}/discover/movie?api_key=${apiKey}&language=en-EN&sort_by=release_date.ascc&include_adult=false&include_video=false&page=1`);
  request.then(({ data }) => callBack(data));
}; */

/* // Tous les films plus récent au plus ancien (ou inversement)
const articlesSorted = (urlAPI, apiKey) => (order, callBack) => {
  const request = axios.get(${urlAPI}/discover/movie?api_key=${apiKey}&language=${localLanguage}&sort_by=release_date.${sorted}&include_adult=false&include_video=false&page=1`);
  request.then(({data}) => callBack(data));
}; */

const articlesSorted = (articlesList, firstFilterParameter, secondFilterParameter) => {
  let orderBy;
  // On récupère le <span> en lien avec le bouton 'Order'
  const ascOrDesc = document.getElementById('ascOrDesc');
  // A chaque clique de l'utilisateur on ajoute ou retire à ce <span> une classe
  ascOrDesc.classList.toggle('asc');
  // Si la existe notre variable 'orderBy' prend la valeur 'asc' sinon elle prend la valeur 'desc'
  ascOrDesc.classList.contains('asc') ? orderBy = 'asc' : orderBy = 'desc';

  if (secondFilterParameter) {console.log(secondFilterParameter);
    articlesList(orderBy, firstFilterParameter, secondFilterParameter, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);
    });
  }
  else if (firstFilterParameter) {console.log(firstFilterParameter);
    articlesList(orderBy, firstFilterParameter, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);
    });
  } else {
    articlesList(orderBy, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);
    });
  }
};

export default articlesSorted;
