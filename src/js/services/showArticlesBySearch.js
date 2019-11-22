// la fonction showArticlesBySearch récupère la date de recherche saisie par l'utilisateur
const showArticlesBySearch = () => {
  let html = '';
  html += `
      <form id="formSearchByName" class="search-bar-container">
          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div class="input-group">
                  <div class="input-group-prepend">
                      <button id="button-addon2" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                  </div>
                  <input id="searchName" name="searchName" type="text" aria-describedby="button-addon2" class="form-control border-0 bg-light" placeholder="Search for...">
              </div>
          </div>
      </form>
  `;

  return html;
};

export default showArticlesBySearch;