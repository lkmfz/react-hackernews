import * as React from 'react';
import API from '../../api/api';
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

    this.getFrontPageResults = this.getFrontPageResults.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.configureResults = this.configureResults.bind(this);
    this.termOnChange = this.termOnChange.bind(this);
    this.searchByTerm = this.searchByTerm.bind(this);
  }

  componentDidMount() {
    this.getFrontPageResults();
  }

  // Web Services
  getFrontPageResults() {
    API.getFrontPageResults(this.state.page, (results) => {
      const list = results as Types.Results;
      this.configureResults(list);
    });
  }

  getSearchResults(searchTerm: string = '') {
    API.getSearchResults(this.state.page, searchTerm, results => {
      const list = results as Types.Results;
      this.configureResults(list);
    });
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
    this.getSearchResults(searchTerm);
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
