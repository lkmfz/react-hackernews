import * as constants from '../constants';

class API {

  public static getInstance(): API {
    return new API();
  }

  public getFrontPageResults(page: number, onSuccess: (results: {}) => void) {
    const params = `${constants.PARAM_PAGE}${page}&${constants.PARAM_TAGS}front_page`;
    const url = `${constants.BASE_URL}${constants.PATH_SEARCH}?${params}`;
    // i.e: 'https://hn.algolia.com/api/v1/search?&page={page}&tags=front_page'

    fetch(url)
      .then(response => response.json())
      .then(results => onSuccess(results));
  }

  public getSearchResults(page: number, term: string, onSuccess: (results: {}) => void) {
    const params = `${constants.PARAM_PAGE}${page}&${constants.PARAM_QUERY}${term}`;
    const url = `${constants.BASE_URL}${constants.PATH_SEARCH}?${params}`;
    // i.e: 'https://hn.algolia.com/api/v1/search?&page={page}&query={term}'

    fetch(url)
      .then(response => response.json())
      .then(results => onSuccess(results));
  }
}

export default new API();
