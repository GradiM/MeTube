// la fonction showArticlesByDate récupère la date de recherche saisie par l'utilisateur
const showArticlesByDate = () => {
  let html = '';
  html += `
      <form id="formSearchByDate" class="search-bar-container">
          <div class="p-1 shadow-sm mb-4">
              <div class="input-group">
                  <div class="input-group-prepend">
                      <button id="button-addon2" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                  </div>
                  <input id="searchYear" name="searchYear" type="text" aria-describedby="button-addon2" class="form-control border-0" placeholder="Year...">
              </div>
          </div>
      </form>
      <hr class="col-xs-12">
  `;

  return html;
};

export default showArticlesByDate;
