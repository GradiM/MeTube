const checkFavoriteIcon = (
  articlesSelectedFavorite = null,
  article = null,
  newArticlesSelectedFavorite = null,
  newArticle = null,
) => {
  let getFavoriteIcon;
  let getChangedFavoriteIcon;

  // S'il y a des films favoris
  if (articlesSelectedFavorite) {
    // Si le film passé en paramètre est déjà en favori
    if (articlesSelectedFavorite.includes(article)) {
      getFavoriteIcon = '<i class="fas fa-heart"></i>';
    } else { // Si le film passé en paramètre n'est pas encore en favori
      getFavoriteIcon = '<i class="far fa-heart"></i>';
    }
  } else { // S'il n'y a pas de films favoris
    getFavoriteIcon = '<i class="far fa-heart"></i>';
  }

  // Ce code-ci est quand l'utilisateur a cliqué sur le bouton "favori"
  // S'il y a des films favoris
  if (newArticlesSelectedFavorite) {
    // Si le film est déjà en favori
    if (newArticlesSelectedFavorite.includes(newArticle)) {
      getChangedFavoriteIcon = '<i class="fas fa-heart"></i>';
    } else { // Si le film n'est pas encore en favori
      getChangedFavoriteIcon = '<i class="far fa-heart"></i>';
    }
  }

  return {
    getFavoriteIcon: getFavoriteIcon,
    getChangedFavoriteIcon: getChangedFavoriteIcon
  };
};

export default checkFavoriteIcon;