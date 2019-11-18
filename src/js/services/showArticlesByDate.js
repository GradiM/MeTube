// la fonction showArticlesByDate récupère des données par date recherchée
const showArticlesByDate = () => {
  let html = '';
  html += `
      <div class="input-group">
          <input type="text" class="form-control" placeholder="Year...">
          <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Go!</button>
          </span>
      </div>
      <hr class="col-xs-12">
  `;

  return html;
};

export default showArticlesByDate;
