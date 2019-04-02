import React from 'react';
import './styles.scss';

const Search = () => (
  <form className="search" action="/search">
    <input
      type="text"
      className="input"
      placeholder="Nunca dejes de buscar"
      autoComplete="off"
      name="search"
    />
    <button type="submit" className="button" />
  </form>
);

export default Search;
