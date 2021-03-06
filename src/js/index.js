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
import showPageTitle from './services/showPageTitle';
import showArticlesByDuration from './services/showAticlesByDuration';
import showArticle from './services/showArticle';
import showFavorites from './services/showFavorites';
import selectFavoriteArticle from './services/selectFavoriteArticle';

import UrlParams from './services/urlParams';

import timeConvertToHourMinute from './services/timeConvertToHourMinute';

if (UrlParams.Url().pathname === '/' || UrlParams.Url().pathname === '/index.html') {
  document.getElementById('global-search-bar').innerHTML = showArticlesBySearch();

  const orderClicked = (articlesList, firstFilterParameter = null, secondFilterParameter = null) => {
    document.getElementById('order').onclick = () => {
      document.getElementById('order').classList.add('order-clicked');
      document.getElementById('order').classList.remove('order-not-clicked');
      document.getElementById('filter').classList.remove('filter-clicked');
      /* document.getElementById('right-side-body').innerHTML = '';
      document.getElementById('filter').classList.add('filter-not-clicked'); */

      articlesSorted(articlesList, firstFilterParameter, secondFilterParameter);
    };
  };

  document.getElementById('filter').onclick = () => {
    document.getElementById('filter').classList.add('filter-clicked');
    document.getElementById('filter').classList.remove('filter-not-clicked');
    document.getElementById('order').classList.remove('order-clicked');

    document.getElementById('right-side-body').innerHTML = showArticlesByDate();

    genreList((result) => {
      document.getElementById('right-side-body').innerHTML += showArticlesByGenre(result);
    });

    document.getElementById('right-side-body').innerHTML += showArticlesByDuration();
  };


  if (UrlParams.UrlParamSearchByName()) { // Si l'utilisateur a saisie un nom de film
    const searchedName = UrlParams.UrlParamSearchByName();

    document.getElementById('page-title').innerHTML = showPageTitle(`Search for : ${searchedName}`);

    const search = searchArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
    // const search = searchArticles();
    search(searchedName, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);

      // Lorsque l'utilisateur clique sur le bouton favori
      selectFavoriteArticle();
    });

    document.getElementById('order').disabled = true;
  } else if (UrlParams.UrlParamSearchByYear()) { // Si l'utilisateur a saisie une date de recherche
    const searchedYear = UrlParams.UrlParamSearchByYear();

    document.getElementById('page-title').innerHTML = showPageTitle(`Movies in ${searchedYear}`);

    const listByDate = articlesByDate('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
    // const search = articlesSorted();
    listByDate(null, searchedYear, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);

      // Lorsque l'utilisateur clique sur le bouton favori
      selectFavoriteArticle();
    });

    // Lorsque l'utilisateur clique sur le boutton du tri
    orderClicked(listByDate, searchedYear);
  } else if (UrlParams.UrlParamSearchByGenre()) { // Si l'utilisateur a choché un (ou plusieurs) genre(s) en particulier
    const searchedGenres = UrlParams.UrlParamSearchByGenre();

    // On liste tous les genres
    genreList((result) => {
      let genresName = [];

      // On parcours la liste de tous les genres
      result.genres.forEach((genre) => {
        // On parcours l'array contenant les genres séléctioné par l'uilisateur
        // On execute cette étape autant de fois qu'il y a de genre séléctioné par l'utilisateur
        searchedGenres.forEach((idGenre) => {
          // On cherche dans la liste de tous les genres
          // S'il y a le genre séléctioné par l'utilisateur, on l'ajout à notre variable
          if (genre.id === +idGenre) {
            genresName.push(genre.name);
          }
        });
      });

      genresName = genresName.join(', ');

      document.getElementById('page-title').innerHTML = showPageTitle(`Categorie : ${genresName}`);
    });

    const listByGenre = articleByGenre('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
    // const search = articleByGenre();
    listByGenre(null, searchedGenres, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);

      // Lorsque l'utilisateur clique sur le bouton favori
      selectFavoriteArticle();
    });

    // Lorsque l'utilisateur clique sur le boutton du tri
    orderClicked(listByGenre, searchedGenres);
  } else if (UrlParams.UrlParamSearchByDuration()) { // Si l'utilisateur a choisi une tranche de durée
    const durationMaxMinuteFormat = +UrlParams.UrlParamSearchByDuration();
    const durationMinMinuteFormat = durationMaxMinuteFormat - 30;

    const durationMaxHourFormat = timeConvertToHourMinute(durationMaxMinuteFormat);
    const durationMinHourFormat = timeConvertToHourMinute(durationMinMinuteFormat);

    document.getElementById('page-title').innerHTML = showPageTitle(`Movies duration : ${durationMinHourFormat} to ${durationMaxHourFormat}`);

    const listByDuration = articlesByDuration('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
    // const search = articlesSorted();
    listByDuration(null, durationMinMinuteFormat, durationMaxMinuteFormat, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);

      // Lorsque l'utilisateur clique sur le bouton favori
      selectFavoriteArticle();
    });

    // Lorsque l'utilisateur clique sur le boutton du tri
    orderClicked(listByDuration, durationMinMinuteFormat, durationMaxMinuteFormat);
  } else { // Par défaut on affiche les films les plus récents
    document.getElementById('page-title').innerHTML = showPageTitle('The latest movie');

    const newest = latestArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
    // const newest = latestArticles();
    newest(null, (results) => {
      document.getElementById('left-side').innerHTML = showArticles(results);

      // Lorsque l'utilisateur clique sur le bouton favori
      selectFavoriteArticle();
    });

    // Lorsque l'utilisateur clique sur le boutton du tri
    orderClicked(newest);
  }
} else if (UrlParams.Url().pathname === '/article.html') {
  if (UrlParams.UrlParamSearchBySelectedArticle()) { // Si l'utilisateur a séléctioné un film
    const selectedArticle = UrlParams.UrlParamSearchBySelectedArticle();
    const article = articleSelected('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
    // const search = articleSelected();
    article(selectedArticle, (results) => {
      document.getElementById('article-container').innerHTML = showArticle(results);

      // Lorsque l'utilisateur clique sur le bouton favori
      selectFavoriteArticle();
    });
  }
} else if (UrlParams.Url().pathname === '/favorites.html') {
  let storedArticles;
  // On récupère le tableau stocké en local, on l'insert dans la variable storedArticles
  // (automatiquement converti en chaîne de caractère)
  storedArticles = localStorage.getItem('favoriteMovies');

  // On converti la chaîne de caractère en tableau
  storedArticles = storedArticles.split(',');

  // On parcour le tableau qui contient donc les IDs des films ajoutés en favori
  storedArticles.forEach((value) => {
    const favorite = articleSelected('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
    favorite(+value, (results) => {console.log(document.getElementById('favorite-content'));
      document.getElementById('favorite-content').innerHTML += showFavorites(results);

      // Lorsque l'utilisateur clique sur le bouton favori
      selectFavoriteArticle();

      // Lorsque l'utilisateur clique sur le bouton de suppression de tous les favoris
      document.getElementById('fav-clear').onclick = () => {
        // On supprime les films en favori
        // On supprime notre tableau en local
        localStorage.removeItem('favoriteMovies');
      };
    });
  });
}
