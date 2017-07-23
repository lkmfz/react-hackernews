import * as React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';

interface Props { }
interface State {
  searchTerm: String;
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  
    this.state = {
      searchTerm: '',
    };
  
    this.termOnChange = this.termOnChange.bind(this);
    this.searchByTerm = this.searchByTerm.bind(this);
  }
  
  termOnChange(value: String) {
    this.setState({searchTerm: value});
  }

  searchByTerm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { searchTerm } = this.state;
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">React HackerNews</h2>
        <div className="content">
          <SearchBar 
            onChangeText={this.termOnChange}
            onClickSearch={this.searchByTerm}
          />
        </div>
      </div>
    );
  }
}
