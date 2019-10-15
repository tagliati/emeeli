import React from 'react';
import NotificationsBlock from './styles';

const Loading = ({ children }) => (
  <NotificationsBlock className="loading">{children}</NotificationsBlock>
);

export default NotificationsBlock;
