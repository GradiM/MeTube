export default class UrlParams { // Cette classe contient les paramètres de l'url
  static Url() {
    return new URL(window.location.href);
  }

  static UrlParamSearchByName() {
    return this.Url().searchParams.get('searchName');
  }

  static UrlParamSearchByYear() {
    return this.Url().searchParams.get('searchYear');
  }

  static UrlParamSearchByGenre() {
    const params = this.Url().search; // format : ?genre=28&genre36

    if (params.includes('genre=')) {
      // Donc on récupère uniquement les entiers (qui sont automatiquement mis dans un tableau)
      return params.match(/\d+/g);// /([^genre=])\d+/g
    }
    return false;
  }

  static UrlParamSearchByDuration() {
    return this.Url().searchParams.get('durationMax');
  }

  static UrlParamSearchBySelectedArticle() {
    return this.Url().searchParams.get('movie');
  }
}
