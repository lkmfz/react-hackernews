import * as React from 'react';
import * as constants from '../../constants';
import * as Types from '../../types';
import './App.css';
import Header from '../Miscs/Header';
import SearchBar from '../SearchBar/SearchBar';
import Content from './Content';

interface AppProps { }
interface AppState {
  page: number;
  searchTerm: string;
  results?: Types.Results | null;
}

export default class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      page: 0,
      searchTerm: '',
      results: null
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
    // url: 'https://hn.algolia.com/api/v1/search?query={searchTerm}&page={page}';
    const query = `${constants.PARAM_SEARCH}${searchTerm}&${constants.PARAM_PAGE}${this.state.page}`;
    const url = `${constants.BASE_URL}${constants.PATH_SEARCH}?${query}`;
  
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

  loadNextDataSet() {
    console.log('Load next page..');
  }

  render() {
    const { results } = this.state;
  
    return (
      <div className="App">
        <Header/>
        <SearchBar
          onChangeText={this.termOnChange}
          onClickSearch={this.searchByTerm}
        />
        <Content results={results} loadMoreOnClick={this.loadNextDataSet}/>
      </div>
    );
  }
}
