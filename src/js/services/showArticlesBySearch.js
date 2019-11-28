// la fonction showArticlesBySearch récupère la date de recherche saisie par l'utilisateur
const showArticlesBySearch = () => {
  let html = '';
  html += `
      <form id="formSearchByName" class="search-bar-container">
          <div class="p-1 rounded rounded-pill shadow-lg mb-4">
              <div class="input-group">
                  <div class="input-group-prepend">
                      <button type="submit" class="btn btn-link text-fire-red"><i class="fa fa-search"></i></button>
                  </div>
                  <input id="searchName" name="searchName" type="text" class="form-control border-0" placeholder="Search for...">
              </div>
          </div>
      </form>
  `;

  return html;
};

export default showArticlesBySearch;
