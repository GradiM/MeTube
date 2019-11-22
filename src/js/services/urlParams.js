// Cette classe contient les paramètres de l'url
export class UrlParams {
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

    // Donc on récupère uniquement les entiers (qui sont automatiquement mis dans un tableau)
    return params.match(/\d+/g);// /([^genre=])\d+/g
  }
}
