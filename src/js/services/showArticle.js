import timeConvertToHourMinute from './timeConvertToHourMinute';
import checkFavoriteIcon from './checkFavoriteIcon';

// Affiche les articles
// la fonction showArticles récupère des données en paramètre (variable "data")
const showArticle = (article) => {
  let poster;
  if (article.backdrop_path) { // Si c'est un poster au format Paysage
    poster = `<img class="img-fluid rounded mb-4 mb-lg-0" src="https://image.tmdb.org/t/p/w500/${article.backdrop_path}" 
                alt="${article.title}'s image poster">`;
  } else if (article.poster_path) { // Sinon, si c'est un poster au format Portrait
    poster = `<img class="img-fluid rounded mb-4 mb-lg-0" src="https://image.tmdb.org/t/p/w500/${article.poster_path}" 
                alt="${article.title}'s image poster">`;
  } else { // S'il n'y a pas de poster
    poster = '<span class="img-none"><i class="far fa-image"></i></span>';
  }

  // On return un tableau contenant les genre
  // à l'aide de la fonction map
  let genres = article.genres.map((genre) => `${genre.name}`);
  genres = genres.join(', ');

  let productionsName = article.production_companies.map((production) => `${production.name}`);
  productionsName = productionsName.join(', ');

  let productionsCountry = article.production_countries.map((country) => `${country.name}`);
  productionsCountry = productionsCountry.join(', ');

  let productionsLogo = article.production_companies.map((production) => (production.logo_path ? `<img style="width:55%;" src="https://image.tmdb.org/t/p/w500/${production.logo_path}" alt="${production.name}'s logo">` : ''));
  productionsLogo = productionsLogo.join(' ');

  // S'il y a un synopsis, on l'affiche. Sinon on écrit "Unknown plot"
  const overview = article.overview ? `${article.overview}` : 'Unknown plot';

  let starsRating;

  const voteAverageToHundred = article.vote_average * 10;
  const percentageVoteAverage = voteAverageToHundred / 100;
  const percentageOfStarsRating = percentageVoteAverage * 5;

  // Si le pourcentage du ratio de vote est inférieur à la moyenne d'une étoile
  // On affiche pas cette étoile
  if (percentageOfStarsRating < Math.floor(percentageOfStarsRating) + 0.5) {
    starsRating = `
                  <div class="star-empty" style="position:relative;
                  width: 50%;">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  
                    <div class="star-filled" style="width:${voteAverageToHundred}%;
                    position:absolute;top:0;height:-webkit-fill-available;overflow:hidden;">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
    `;
  } else { // Sinon, on affiche cette étoile de moitié
    starsRating = `
                  <div class="star-empty" style="position:relative;width:50%;height:25px;">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    
                    <div class="star-filled" style="position:relative;bottom:25px;
                    width:${voteAverageToHundred}%;height:-webkit-fill-available;overflow:hidden;">
                      <i class="fas fa-star-half"></i>
                      <i class="fas fa-star-half"></i>
                      <i class="fas fa-star-half"></i>
                      <i class="fas fa-star-half"></i>
                      <i class="fas fa-star-half"></i>
                      
                      <div class="star-half-filled" style="width:${voteAverageToHundred + 7}%;
                      position:absolute;top:0;height:-webkit-fill-available;overflow:hidden;">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
    `;
  }

  const favoriteArticles = localStorage.getItem('favoriteMovies');
  const favoriteIcon = checkFavoriteIcon(
    favoriteArticles,
    article.id,
    null,
    null,
  ).getFavoriteIcon;

  let html = '';

  html += `
      <div class="float-sm-right">
          <span id="fav-${article.id}" class="h4 text-fire-red favorite">${favoriteIcon}</span>
      </div>
      <!-- Heading Row -->
      <div class="row align-items-center my-5">
          <div class="col-md-9">
              <h1 class="my-4 text-fire-red">Movie's details</h1>
          </div>
          <div class="col-md-3">${productionsLogo}</div>
      </div>
      <!-- /.row -->
  
      <!-- Heading Row -->
      <div class="row align-items-center my-5">
          <div class="col-lg-4 text-center">
              ${poster}
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-lg-8">
            <div class="row">
                <div class="col-md-8">
                    ${article.original_title === article.title
    ? `<h2 class="h2 text-fire-red">${article.title}</h2>`
    : `<h2 class="h2 text-fire-red">${article.original_title}</h2><span class="font-italic">${article.title}</span>`
}
                </div>
                <div class="col-md-4 text-fire-red">
                    ${starsRating}
                </div>
            </div>
              <div class="row align-items-center">
                  <div class="col-md-3">
                      <p>${article.release_date.substr(0, 4)} | ${timeConvertToHourMinute(article.runtime)}</p>
                  </div>
                  <div class="col-md-3">
                      <p><span class="text-fire-red font-weight-bold">Popularity</span> ${Math.round(article.popularity)}%</p>
                  </div>
              </div>
              <p>${overview}</p>
          </div>
          <!-- /.col-md-4 -->
      </div>
      <!-- /.row -->
  
      <div class="row align-items-center my-5">
          <div class="col-md-8">
              <p><span class="text-fire-red font-weight-bold">Genre</span>: ${genres}</p>
              <p><span class="text-fire-red font-weight-bold">Producer</span>: ${productionsName}</p>
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-md-4">
              <div class="row my-5">
                  <div class="col-lg-6"><span class="text-fire-red font-weight-bold">Popularity</span></div>
                  <div class="col-lg-6">${(article.popularity / 10).toFixed(1)}/10</div>
              </div>
              <div class="row my-5">
                  <div class="col-lg-6"><span class="text-fire-red font-weight-bold">Votes average</span></div>
                  <div class="col-lg-6">${article.vote_average.toFixed(1)}/10</div>
              </div>
              <div class="row my-5">
                  <div class="col-lg-6"><span class="text-fire-red font-weight-bold">Total votes</span></div>
                  <div class="col-lg-6">
                    ${article.vote_count}
                  </div>
              </div>
          </div>
          <!-- /.col-md-4 -->
      </div>
  
      <!-- Content Row -->
      <div class="row align-items-center my-5">
          <div class="col-md-8">
              <div class="row my-5">
                  <div class="col-lg-5"><span class="text-fire-red font-weight-bold">Status</span></div>
                  <div class="col-lg-5">${article.status}</div>
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="text-fire-red font-weight-bold">Budget</span></div>
                  <div class="col-lg-5">$${article.budget}</div>
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="text-fire-red font-weight-bold">Box Office</span></div>
                  <div class="col-lg-5">$${article.revenue}</div>
              </div>
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-md-4">
              <div class="row my-5">
                  <div class="col-lg-5"><span class="text-fire-red font-weight-bold">Production</span></div>
                  <div class="col-lg-5">${productionsName}</div>
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="text-fire-red font-weight-bold">Website</span></div>
                    ${article.homepage ? `<div class="col-lg-5"><a href="${article.homepage}" target="_blank">Click here</a></div>` : ''}
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="text-fire-red font-weight-bold">Country</span></div>
                  <div class="col-lg-5">${productionsCountry}</div>
              </div>
          </div>
          <!-- /.col-md-4 -->
      </div>
      <!-- /.row -->
    `;
  return html;
};

export default showArticle;
