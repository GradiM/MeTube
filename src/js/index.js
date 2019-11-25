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
import paginationNewer from "./services/paginationNewer";
import paginationOlder from "./services/paginationOlder";

document.getElementById('global-search-bar').innerHTML = showArticlesBySearch();

function orderClicked(articlesList, filterParameter = null) {
  document.getElementById('order').onclick = () => {
    document.getElementById('order').classList.add('order-clicked');
    document.getElementById('order').classList.remove('order-not-clicked');
    document.getElementById('filter').classList.remove('filter-clicked');

    articlesSorted(articlesList, filterParameter);
  };
}

document.getElementById('filter').onclick = () => {
  document.getElementById('filter').classList.add('filter-clicked');
  document.getElementById('filter').classList.remove('filter-not-clicked');
  document.getElementById('order').classList.remove('order-clicked');

  document.getElementById('right-side-body').innerHTML = showArticlesByDate();

  genreList((result) => {
    document.getElementById('right-side-body').innerHTML += showArticlesByGenre(result);
  });
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
  listByDate(null, searchedYear, (results) => {
    document.getElementById('left-side').innerHTML = showArticles(results);
  });

  // Lorsque l'utilisateur clique sur le boutton du tri
  orderClicked(listByDate, searchedYear);

} else if (UrlParams.UrlParamSearchByGenre()) { // Si l'utilisateur a choché un (ou plusieurs) genre(s) en particulier

  const searchedGenres = UrlParams.UrlParamSearchByGenre();

  const listByGenre = articleByGenre('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
  // const search = articleByGenre();
  listByGenre(null, searchedGenres, (results) => {
    document.getElementById('left-side').innerHTML = showArticles(results);
  });

  // Lorsque l'utilisateur clique sur le boutton du tri
  orderClicked(listByGenre, searchedGenres);

} else { // Par défaut on affiche les films les plus récents

  const newest = latestArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
  // const newest = latestArticles();
  newest(null, (results) => {
    document.getElementById('left-side').innerHTML = showArticles(results);

    /*document.getElementById('pagination').innerHTML = paginationOlder();
    document.getElementById('pagination').innerHTML += paginationNewer();

    function olderPageClicked(numberPage) {
      numberPage --;
    }

    function newerPageClicked(numberPage) {
      numberPage ++;
      const newest = latestArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634', numberPage);
      // const newest = latestArticles();
      newest((results) => {
        document.getElementById('left-side').innerHTML = showArticles(results);

        document.getElementById('pagination').innerHTML = paginationOlder();
        document.getElementById('pagination').innerHTML += paginationNewer();
      });
    }

    document.getElementById('olderPage').onclick = () => {
      olderPageClicked(results.page);
    };

    document.getElementById('newerPage').onclick = () => {
      newerPageClicked(results.page);
    };*/
  });

  // Lorsque l'utilisateur clique sur le boutton du tri
  orderClicked(newest);

}

const article = articleSelected('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articleSelected();
article('299536', (results) => { // 393209
  // console.log(results);
});

const listByDuration = articlesByDuration('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articlesSorted();
listByDuration('80', (results) => {
  // console.log(results);
});
