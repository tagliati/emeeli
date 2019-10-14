import React from 'react';
import SearchBlock from './styles';

const Search = () => (
  <SearchBlock action="/search">
    <input
      type="text"
      className="input"
      placeholder="Nunca dejes de buscar"
      autoComplete="off"
      name="search"
    />
    <button type="submit" className="button" />
  </SearchBlock>
);

export default Search;
