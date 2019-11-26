// Affiche les articles
// la fonction showArticles récupère des données en paramètre (variable "data")
const showArticles = (data) => {
  let html = '';
  // On boucle sur la propriété "results" de l'objet "data" qui contient nos données
  data.results.forEach((article) => {
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
                    <a href="article.html?movie=${article.id}" class="text-decoration-none">
                      ${article.original_title === article.title
    ? `<h5>${article.title}</h5>`
    : `<h5>${article.original_title}</h5><span class="font-italic">${article.title}</span>`
}
                    </a>
                    <div>
                        <p>${article.release_date.substr(0, 4)}</p>
                    </div>
                    <div>
                      ${article.overview.length <= 125
  ? `<p>${article.overview}</p>`
  : `<p>${article.overview.substr(0, 125)}...</p>`
}
                    </div>
                  </div>
              </div>
          </div>
          <div class="card-body">
              <div class="row">
                  <div class="col-lg-6">
                      <p><span class="font-weight-bold">Popularity</span> ${Math.round(article.popularity)}%</p>
                  </div>
                  <div class="col-lg-6">
                      <a href="article.html?movie=${article.id}" class="btn btn-primary">Read More &rarr;</a>
                  </div>
              </div>
          </div>
        </div>
    `;
  });
  return html;
};

export default showArticles;
