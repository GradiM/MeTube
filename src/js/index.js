import '../scss/style.scss';
import '../../node_modules/jquery/dist/jquery.min';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import searchArticles from './services/searchArticles';
import genreList from './services/genresList';
import articleSelected from './services/articleSelected';
import latestArticles from './services/latestArticles';
import articleByGenre from './services/articlesByGenre';
import articlesSorted from './services/articlesSorted';
import articlesByDate from './services/articlesByDate';
import articlesByDuration from './services/articlesByDuration';
import showArticles from './services/showArticles';
import showArticlesByDate from './services/showArticlesByDate';
import showArticlesByGenre from './services/showArticlesByGenre';
import showArticlesBySearch from './services/showArticlesBySearch';

import { UrlParams } from './services/urlParams';

document.getElementById('global-search-bar').innerHTML = showArticlesBySearch();

function filterClicked() {
  document.getElementById('filter').classList.add('filter-clicked');
  document.getElementById('order').classList.remove('order-clicked');

  document.getElementById('right-side-body').innerHTML = showArticlesByDate();

  genreList((result) => {
    document.getElementById('right-side-body').innerHTML += showArticlesByGenre(result);
  });
}

function orderClicked() {
  document.getElementById('order').classList.add('order-clicked');
  document.getElementById('filter').classList.remove('filter-clicked');

  document.getElementById('right-side-body').innerHTML = '';
}

document.getElementById('filter').onclick = () => {
  filterClicked();
};

document.getElementById('order').onclick = () => {
  orderClicked();
};

if (UrlParams.UrlParamSearchByName()) { // Si l'utilisateur a saisie un nom de film
  const searchedName = UrlParams.UrlParamSearchByName();
  const search = searchArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
  // const search = searchArticles();
  search(searchedName, (results) => {
    document.getElementById('left-side').innerHTML = showArticles(results);
  });
} else if (UrlParams.UrlParamSearchByYear()) { // Si l'utilisateur a saisie une date de recherche
  const searchedYear = UrlParams.UrlParamSearchByYear();
  const listByDate = articlesByDate('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
  // const search = articlesSorted();
  listByDate(searchedYear, (results) => {
    document.getElementById('left-side').innerHTML = showArticles(results);
  });
} else if (UrlParams.UrlParamSearchByGenre()) { // Si l'utilisateur a choché un (ou plusieurs) genre(s) en particulier
  const searchedGenres = UrlParams.UrlParamSearchByGenre();
  const listByGenre = articleByGenre('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
  // const search = articleByGenre();
  listByGenre(searchedGenres, (results) => {
    document.getElementById('left-side').innerHTML = showArticles(results);
  });
} else { // Par défaut on affiche les films les plus récents
  const newest = latestArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
  // const newest = latestArticles();
  newest((results) => {
    document.getElementById('left-side').innerHTML = showArticles(results);
  });
}

const article = articleSelected('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articleSelected();
article('299536', (results) => { // 393209
  // console.log(results);
});

const sortedList = articlesSorted('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articlesSorted();
sortedList('asc', (results) => {
  // console.log(results);
});

const listByDuration = articlesByDuration('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articlesSorted();
listByDuration('80', (results) => {
  // console.log(results);
});
