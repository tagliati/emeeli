import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Wrapper = ({ children, customClass }) => (
  <div className={`wrapper ${customClass || ''}`}>{children}</div>
);

Wrapper.defaultProps = {
  customClass: '',
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  customClass: PropTypes.string,
};

export default Wrapper;
