import checkFavoriteIcon from './checkFavoriteIcon';

const selectFavoriteArticle = () => {
  let chosenArticles;
  // S'il y a déjà des films en favori
  localStorage.getItem('favoriteMovies')
    // On les récupère sous forme de tableau
    ? chosenArticles = localStorage.getItem('favoriteMovies').split(',')
    // Sinon, on déclare un nouveau tableau vide
    : chosenArticles = [];
  const articles = document.getElementsByClassName('favorite');

  // Pour tous les boutons "favoris"
  Object.keys(articles).forEach((elemKey) => {
    // Lorsque l'utilisateur clique sur un bouton
    articles[elemKey].addEventListener('click', () => {
      let movieId = articles[elemKey].getAttribute('id');
      movieId = movieId.replace('fav-', '');

      // Si le film est déjà en favori
      if (chosenArticles.includes(movieId)) {
        // On supprime le film de notre tableau
        // On parcours notre tableau, on pose un filtre
        // Si une valeur du tableau correspond à notre film, elle ne sera pas retournée
        chosenArticles = chosenArticles.filter((value) => value !== movieId);

        // On stock notre tableau en local
        localStorage.setItem('favoriteMovies', chosenArticles);
      } else { // Si le film n'est pas encore en favori
        // On ajoute l'id à notre tableau
        chosenArticles.push(movieId);

        // On stock notre tableau en local
        localStorage.setItem('favoriteMovies', chosenArticles);
      }

      document.getElementById(`fav-${movieId}`).innerHTML = checkFavoriteIcon(
        null,
        null,
        chosenArticles,
        movieId,
      ).getChangedFavoriteIcon;
    }, false);
  });
};

export default selectFavoriteArticle;
