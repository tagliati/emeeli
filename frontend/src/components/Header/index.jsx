import React from 'react';
import './styles.scss';
import Wrapper from '../Wrapper';
import Search from './Search';

const Header = () => (
  <div className="header">
    <Wrapper customClass="header-align">
      <div className="box-logo">
        <a href="/" className="logo">Mercado Livre</a>
      </div>
      <Search />
    </Wrapper>
  </div>
);

export default Header;
