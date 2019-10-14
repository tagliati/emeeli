import React from 'react';
import PropTypes from 'prop-types';
import Bread from './styles';

const Breadcrumb = ({ categories }) => <Bread>{categories}</Bread>;

Breadcrumb.defaultProps = {
  categories: {},
};

Breadcrumb.propTypes = {
  categories: PropTypes.string,
};

export default Breadcrumb;
