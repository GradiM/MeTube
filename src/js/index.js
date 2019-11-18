import '../scss/style.scss';
import '../../node_modules/jquery/dist/jquery.min';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import apiKey from './constants/apiKey';
import urlAPI from './constants/urlAPI';
import localLanguage from './constants/localLanguage';
import searchArticles from './services/searchArticles';
import articleSelected from './services/articleSelected';
import latestArticles from './services/latestArticles';
import articleByGenre from './services/articlesByGenre';
import articlesSorted from './services/articlesSorted';
import articlesByDate from './services/articlesByDate';
import articlesByDuration from './services/articlesByDuration';
import showArticles from './services/showArticles';
import showArticlesByDate from './services/showArticlesByDate';
import showArticlesByGenre from './services/showArticlesByGenre';

function filterClicked() {
  document.getElementById('filter').classList.add('filter-clicked');
  document.getElementById('order').classList.remove('filter-clicked');

  document.getElementById('right-side-body').innerHTML = showArticlesByDate();
  document.getElementById('right-side-body').innerHTML += showArticlesByGenre();
}

function orderClicked() {
  document.getElementById('order').classList.add('filter-clicked');
  document.getElementById('filter').classList.remove('filter-clicked');

  document.getElementById('right-side-body').innerHTML = '';
}

document.getElementById('filter').onclick = () => {
  filterClicked();
};

document.getElementById('order').onclick = () => {
  orderClicked();
};

const newest = latestArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const newest = latestArticles();
newest((results) => {
  document.getElementById('left-side').innerHTML = showArticles(results);
});

const search = searchArticles('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = searchArticles();
search('avengers', (results) => {
  console.log(results);
});

const article = articleSelected('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articleSelected();
article('299536', (results) => { // 393209
  console.log(results);
});

const sortedList = articlesSorted('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articlesSorted();
sortedList('asc', (results) => {
  console.log(results);
});

const listByDate = articlesByDate('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articlesSorted();
listByDate('1950', (results) => {
  console.log(results);
});

// Tous les genres
const genreList = () => (callBack) => {
  const request = axios.get(`${urlAPI}/genre/movie/list?api_key=${apiKey}&language=${localLanguage}`);
  request.then(
    ({ data }) => callBack(data),
  );
};

const listByGenre = articleByGenre('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articleByGenre();
listByGenre(['12'], (results) => {
  console.log(results);
});

const listByDuration = articlesByDuration('https://api.themoviedb.org/3', 'dcb1674909d2bb927677408807375634');
// const search = articlesSorted();
listByDuration('80', (results) => {
  console.log(results);
});
