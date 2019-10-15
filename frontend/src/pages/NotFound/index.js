import React from 'react';
import NotFoundBlock from './styles';

const NotFound = () => (
  <NotFoundBlock>
    <h4>Página não encontrada</h4>
    <a href="/" className="logo">
      Ir para página principal
    </a>
  </NotFoundBlock>
);

export default NotFound;
