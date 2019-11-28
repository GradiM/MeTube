// Affiche les articles
// la fonction showArticles récupère des données en paramètre (variable "data")
const showArticles = (data) => {
  let html = '';
  // On boucle sur la propriété "results" de l'objet "data" qui contient nos données
  data.results.forEach((article) => {
    let overview;
    // S'il y a un synopsis
    article.overview
      ?
      // Si le synopsis n'est pas trop long
      article.overview.length <= 125
        ? overview = `${article.overview}`
        // Si le synopsis est trop long
        : overview = `${article.overview.substr(0, 125)}...`
      // S'il n'y a pas de synopsis
      :
      overview = `Unknown plot`;

    html += `
        <div class="card mb-4">
          <div class="card-body">
              <div class="row">
                  <div class="col-lg-6 text-center">
                    <a href="article.html?movie=${article.id}">
                      ${article.poster_path
    ? `<img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${article.poster_path}" alt="${article.title}'s image poster">`
    : '<span class="img-none"><i class="far fa-image"></i></span>'
}
                    </a>
                  </div>
                  <div class="col-lg-6">
                    <a href="article.html?movie=${article.id}" class="text-fire-red text-decoration-none">
                      ${article.original_title === article.title
    ? `<h5>${article.title}</h5>`
    : `<h5>${article.original_title}</h5><span class="font-italic">${article.title}</span>`
}
                    </a>
                    <div>
                        <p>${article.release_date.substr(0, 4)}</p>
                    </div>
                    <div><p>${overview}</p></div>
                  </div>
              </div>
          </div>
          <div class="card-body">
              <div class="row text-center">
                  <div class="col-lg-6">
                      <p class="float-lg-left"><span class="text-fire-red font-weight-bold">Popularity</span> ${Math.round(article.popularity)}%</p>
                  </div>
                  <div class="col-lg-6">
                      <a href="article.html?movie=${article.id}" class="h3 text-fire-red float-lg-right"><i class="fab fa-readme"></i></a>
                  </div>
              </div>
          </div>
        </div>
    `;
  });
  return html;
};

export default showArticles;
