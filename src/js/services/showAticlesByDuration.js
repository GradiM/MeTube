// la fonction showArticlesByDate affiche les genres possible
const showArticlesByDuration = () => {
  let html = '';

  html += `
    <div class="form-check">
      <form id="formSearchedByDuration">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="durationMax" value="30">
            <label class="form-check-label" for="durationMax">
              1min to 30min
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="durationMax" value="60">
            <label class="form-check-label" for="durationMax">
              30min to 1h
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="durationMax" value="90">
            <label class="form-check-label" for="durationMax">
              1h to 1h30
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="durationMax" value="120">
            <label class="form-check-label" for="durationMax">
              1h30 to 2h
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="durationMax" value="150">
            <label class="form-check-label" for="durationMax">
              2h to 2h30
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="durationMax" value="180">
            <label class="form-check-label" for="durationMax">
              2h30 to 3h
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="durationMax" value="210">
            <label class="form-check-label" for="durationMax">
              3h to 3h30
            </label>
          </div>
          <br>
          <input class="btn btn-secondary" type="submit" value="Go!">
      </form>
    </div>
    <hr class="col-xs-12">
`;

  return html;
};

export default showArticlesByDuration;