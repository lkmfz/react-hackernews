import * as React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onChangeText(value: String): void;
  onClickSearch(event: React.FormEvent<HTMLFormElement>): void;
}

const SearchBar = ({ onChangeText, onClickSearch }: SearchBarProps) => {
  return (
    <form onSubmit={onClickSearch}>
      <input
        className="input"
        type="text"
        placeholder="Keywords.."
        onChange={(event) => { onChangeText(event.target.value); }}
      />
      <button className= "search" type="submit">
        🔎
      </button>
    </form>
  );
};

export default SearchBar;
