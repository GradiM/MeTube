// la fonction showArticlesByDate affiche les genres possible
const showArticlesByGenre = (data) => {
  let html = '';

  html += '<div class="form-check"><form id="formSearcheByGenre"><fieldset>';
  const { genres } = data;

  genres.forEach((genre) => {
    html += `<input class="form-check-input" type="checkbox" name="genre" value="${genre.id}"><span class="form-check-label">${genre.name}</span><br>`;
  });

  html += '<br><input class="btn btn-secondary" type="submit" value="Go!"></fieldset></form></div><hr class="col-xs-12">';

  return html;
};

export default showArticlesByGenre;
