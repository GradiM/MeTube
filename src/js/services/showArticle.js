// Affiche les articles
// la fonction showArticles récupère des données en paramètre (variable "data")
import timeConvertToHourMinute from "./timeConvertToHourMinute";

const showArticle = (article) => {
  // On return un tableau contenant les genre
  // à l'aide de la fonction map
  let genres = article.genres.map((genre) =>
    `${genre.name}`
  );
  genres = genres.join(', ');

  let productionsName = article.production_companies.map((production) =>
      `${production.name}`
  );
  productionsName = productionsName.join(', ');

  let productionsCountry = article.production_countries.map((country) =>
    `${country.name}`
  );
  productionsCountry = productionsCountry.join(', ');

  let productionsLogo = article.production_companies.map((production) =>
    productionsLogo ? `<img style="width:55%;" src="https://image.tmdb.org/t/p/w500/${production.logo_path}" alt="${production.name}'s logo">` : ''
  );
  productionsLogo = productionsLogo.join(' ');

  let html = '';

    html += `
      <!-- Heading Row -->
      <div class="row align-items-center my-5">
          <div class="col-md-9">
              <h1 class="my-4">Movie's details</h1>
          </div>
          <div class="col-md-3">${productionsLogo}</div>
      </div>
      <!-- /.row -->
  
      <!-- Heading Row -->
      <div class="row align-items-center my-5">
          <div class="col-lg-4 text-center">
              ${article.poster_path
      ? `<img class="img-fluid rounded mb-4 mb-lg-0" src="https://image.tmdb.org/t/p/w500/${article.poster_path}" alt="${article.title}'s image poster">`
      : '<span class="img-none"><i class="far fa-image"></i></span>'
    }
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-lg-8">
            <div class="row">
                <div class="col-md-8">
                    ${article.original_title === article.title
      ? `<h2 class="h2">${article.title}</h2>`
      : `<h2 class="h2">${article.original_title}</h2><span class="font-italic">${article.title}</span>`
    }
                </div>
                <div class="col-md-4">
                    <div class="position-absolute">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
              <div class="row align-items-center">
                  <div class="col-md-3">
                      <p>${article.release_date.substr(0, 4)} | ${timeConvertToHourMinute(article.runtime)}</p>
                  </div>
                  <div class="col-md-3">
                      <p><span class="font-weight-bold">Popularity</span> ${Math.round(article.popularity)}%</p>
                  </div>
              </div>
              <p>${article.overview}</p>
              <!--<a class="btn btn-primary float-right" href="#">Read more</a>-->
          </div>
          <!-- /.col-md-4 -->
      </div>
      <!-- /.row -->
  
      <div class="row align-items-center my-5">
          <div class="col-md-8">
              <p><span class="font-weight-bold">Genre</span>: ${genres}</p>
              <p><span class="font-weight-bold">Producer</span>: ${productionsName}</p>
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-md-4">
              <div class="row my-5">
                  <div class="col-lg-6">Popularity</div>
                  <div class="col-lg-6">${(article.popularity / 10).toFixed(1)}/10</div>
              </div>
              <div class="row my-5">
                  <div class="col-lg-6">Votes average</div>
                  <div class="col-lg-6">${article.vote_average.toFixed(1)}/10</div>
              </div>
              <div class="row my-5">
                  <div class="col-lg-6">Total votes</div>
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
                  <div class="col-lg-5"><span class="font-weight-bold">Status</span></div>
                  <div class="col-lg-5">${article.status}</div>
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="font-weight-bold">Budget</span></div>
                  <div class="col-lg-5">$${article.budget}</div>
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="font-weight-bold">Box Office</span></div>
                  <div class="col-lg-5">$${article.revenue}</div>
              </div>
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-md-4">
              <div class="row my-5">
                  <div class="col-lg-5"><span class="font-weight-bold">Production</span></div>
                  <div class="col-lg-5">${productionsName}</div>
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="font-weight-bold">Website</span></div>
                    ${article.homepage ? `<div class="col-lg-5"><a href="${article.homepage}" target="_blank">Click here</a></div>` : ''}
              </div>
  
              <div class="row my-5">
                  <div class="col-lg-5"><span class="font-weight-bold">Country</span></div>
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
