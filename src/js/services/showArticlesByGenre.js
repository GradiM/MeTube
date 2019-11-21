// la fonction showArticlesByDate affiche les genres possible
const showArticlesByGenre = (data) => {
  let html = '';
  let indice = 0;

  html += `<div class="input-group"><form id="formSearcheByGenre"><fieldset>`;
  const genres = data.genres;

  genres.forEach((genre) => {
    html += `<input type="checkbox" name="genre" value="${genre.id}">${genre.name}<br>`;

    indice++;
  });

  html += `<br><input class="btn btn-secondary" type="submit" value="Go!"></fieldset></form></div><hr class="col-xs-12">`;

  return html;
};

export default showArticlesByGenre;
