import React from 'react';
import PropTypes from 'prop-types';
import WrapperBlock from './styles';

const Wrapper = ({ children, customClass }) => (
  <WrapperBlock className={`wrapper ${customClass || ''}`}>
    {children}
  </WrapperBlock>
);

Wrapper.defaultProps = {
  customClass: '',
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  customClass: PropTypes.string,
};

export default Wrapper;
