import * as React from 'react';
import * as constants from '../../constants';
import * as Types from '../../types';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Table from '../Table/Table';

interface AppProps { }
interface AppState {
  searchTerm: string;
  results?: Types.Results | null;
}

export default class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      searchTerm: '',
      results: null,
    };

    this.makeSearchRequest = this.makeSearchRequest.bind(this);
    this.configureResults = this.configureResults.bind(this);
    this.termOnChange = this.termOnChange.bind(this);
    this.searchByTerm = this.searchByTerm.bind(this);
  }

  componentDidMount() {
    this.makeSearchRequest();
  }
  // Web Services
  makeSearchRequest(searchTerm: string = constants.DEFAULT_QUERY) {
    // url: 'https://hn.algolia.com/api/v1/search?query={searchTerm}';
    const url = `${constants.BASE_URL}${constants.PATH_SEARCH}?${constants.PARAM_SEARCH}${searchTerm}`;
    fetch(url)
      .then(response => response.json())
      .then(results => this.configureResults(results));
  }

  configureResults(results: Types.Results) {
    this.setState({
      results: results
    });
  }

  termOnChange(value: string) {
    this.setState({ searchTerm: value });
  }

  searchByTerm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { searchTerm } = this.state;
    this.makeSearchRequest(searchTerm);
  }

  render() {
    const { results } = this.state;

    return (
      <div className="App">
        <h2 className="Title">React HackerNews</h2>
        <div className="SearchBar">
          <SearchBar
            onChangeText={this.termOnChange}
            onClickSearch={this.searchByTerm}
          />
        </div>
        <div className="Content">
          <Table results={results} />
        </div>
      </div>
    );
  }
}
