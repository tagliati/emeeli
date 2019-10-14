import React from 'react';
import Wrapper from '../Wrapper';
import Search from './Search';
import HeadBlock from './styles';

const Header = () => (
  <HeadBlock>
    <Wrapper customClass="header-align">
      <a href="/" className="logo">
        Mercado Livre
      </a>
      <Search />
    </Wrapper>
  </HeadBlock>
);

export default Header;
