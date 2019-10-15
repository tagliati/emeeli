import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Wrapper from '../../components/Wrapper';
import ProductDetail from '../../components/ProductDetail';
import Breadcrumb from '../../components/Breadcrumb';
import Loading from '../../components/Loading';
import Notifications from '../../components/Notifications';

const Product = props => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    async function fetchData() {
      try {
        const result = await api.get(`/items/${id}`);
        console.log(result);
        setProduct(result.data);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
    // pq preciso disso no catch?
    // props.history.push('/');
  }, [props.match.params]);

  function renderProductDetail(productDetail) {
    return <ProductDetail product={productDetail} />;
  }

  function renderProductBreadcrumb(productDetail) {
    const textProduct = productDetail.categories.map(cat => cat).join(' > ');
    return <Breadcrumb categories={textProduct} />;
  }

  const renderEmpty = () => <Loading />;

  if (Object.keys(error).length) {
    return <Notifications>{error.message}</Notifications>;
  }

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
