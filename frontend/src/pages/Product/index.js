import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Wrapper from '../../components/Wrapper';
import ProductDetail from '../../components/ProductDetail';
import Breadcrumb from '../../components/Breadcrumb';
import Loading from '../../components/Loading';

const Product = props => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const { id } = props.match.params;

    api
      .get(`/items/${id}`)
      .then(result => {
        setProduct(result.data);
      })
      .catch(() => {
        props.history.push('/');
      });
  }, []);

  function renderProductDetail(productDetail) {
    return <ProductDetail product={productDetail} />;
  }

  function renderProductBreadcrumb(productDetail) {
    const textProduct = productDetail.categories.map(cat => cat).join(' > ');
    return <Breadcrumb categories={textProduct} />;
  }
  const renderEmpty = () => <Loading />;
  return (
    <Wrapper>
      {Object.keys(product).length ? renderProductBreadcrumb(product) : ''}
      {Object.keys(product).length
        ? renderProductDetail(product)
        : renderEmpty()}
    </Wrapper>
  );
};

Product.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Product;
