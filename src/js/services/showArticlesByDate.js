// la fonction showArticlesByDate récupère la date de recherche saisie par l'utilisateur
const showArticlesByDate = () => {
  let html = '';
  html += `
      <div class="input-group">
        <form id="formSearcheByDate">
          <input id="searchYear" name="searchYear" type="text" class="form-control" placeholder="Year...">
          <span class="input-group-btn">
              <input class="btn btn-secondary" type="submit" value="Go!">
          </span>
         </form>
      </div>
      <hr class="col-xs-12">
  `;

  return html;
};

export default showArticlesByDate;
