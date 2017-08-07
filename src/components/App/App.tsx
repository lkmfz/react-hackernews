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
  isLoading: boolean;
  isReachBottom: boolean;
  hits: Types.Item[];
}

export default class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      page: 0,
      searchTerm: '',
      isLoading: true,
      isReachBottom: false,
      hits: [],
    };

    this.getFrontPageResults = this.getFrontPageResults.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.configureResults = this.configureResults.bind(this);
    this.termOnChange = this.termOnChange.bind(this);
    this.searchByTerm = this.searchByTerm.bind(this);
    this.loadNextDataSet = this.loadNextDataSet.bind(this);
  }

  componentDidMount() {
    const { page } = this.state;
    this.getFrontPageResults(page);
  }

  // Web Services
  getFrontPageResults(page: number) {
    API.getFrontPageResults(page, (results) => {
      this.configureResults(results as Types.Results);
    });
  }

  getSearchResults(page: number, searchTerm: string = '') {
    API.getSearchResults(page, searchTerm, results => {
      this.configureResults(results as Types.Results);
    });
  }

  configureResults(results: Types.Results) {
    if (results.hits.length !== 0) {
      this.setState((prevState) => {
        return {
          page: results.page,
          isLoading: false,
          hits: prevState.hits.concat(results.hits),
        };
      });
    } else {
      this.setState({
        isReachBottom: true
      });
    }
  }

  termOnChange(term: string) {
    this.setState({
      searchTerm: term
    });
  }

  searchByTerm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { searchTerm, page } = this.state;

    if (searchTerm === '') {
      this.getFrontPageResults(page);
    } else {
      this.getSearchResults(page, searchTerm);
    }
  }

  loadNextDataSet() {
    const { page, searchTerm } = this.state;

    this.setState({
      isLoading: true
    });

    if (searchTerm === '') {
      this.getFrontPageResults(page + 1);
    } else {
      this.getSearchResults(page + 1, searchTerm);
    }
  }

  render() {
    console.log(this.state);

    return (
      <div className="App" >
        <Header />
        <SearchBar
          onChangeText={this.termOnChange}
          onClickSearch={this.searchByTerm}
        />
        <Content 
          hits={this.state.hits}
          isLoading={this.state.isLoading}
          isReachedBottom={this.state.isReachBottom}
          loadMoreOnClick={this.loadNextDataSet}
        />
      </div >
    );
  }
}
