// la fonction showArticlesByDate récupère des données par genre séléctionné
const showArticlesByGenre = () => {
  let html = '';
  html += `
      <div class="input-group">
          <form>
              <fieldset>
                  <input type="checkbox" name="favorite_pet" value="Cats">Cats<br>
                  <input type="checkbox" name="favorite_pet" value="Dogs">Dogs<br>
                  <input type="checkbox" name="favorite_pet" value="Birds">Birds<br>
                  <br>
                  <button class="btn btn-secondary" type="button">Go!</button>
              </fieldset>
          </form>
      </div>
      <hr class="col-xs-12">
  `;

  return html;
};

export default showArticlesByGenre;
