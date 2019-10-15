import React from 'react';
import NotificationsBlock from './styles';

const Notifications = ({ children }) => (
  <NotificationsBlock className="loading">
    {children}
    <a href="/">Ir para página principal</a>
  </NotificationsBlock>
);

export default Notifications;
