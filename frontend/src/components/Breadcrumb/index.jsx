import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Breadcrumb = ({ categories }) =>  (
  <div className="breadcrumb">
    {categories}
  </div>
);


Breadcrumb.defaultProps = {
  categories: {},
};

Breadcrumb.propTypes = {
  categories: PropTypes.string,
};

export default Breadcrumb;
