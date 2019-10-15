import React from 'react';
import LoadingBlock from './styles';

const Loading = () => (
  <LoadingBlock className="loading">
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </LoadingBlock>
);

export default Loading;
