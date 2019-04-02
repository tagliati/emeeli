import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProductDetail = ({ product }) => {
  const {
    picture, price, title, sold_quantity, description, condition,
  } = product.item;
  const textCondition = condition ? 'Nuevo' : 'Usado';

  return (
    <>
      <div className="product">
        <div className="info">
          <div className="box-image">
            <img className="image" alt={title} src={picture} />
          </div>
          <div className="box-content">
            <span className="status">
              {`${textCondition} - ${sold_quantity} vendidos`}
            </span>
            <h1 className="title">{title}</h1>
            <span className="price">
              {`${price.currency} ${price.amount}`}
            </span>
            <button className="buy" type="submit">
              Comprar
            </button>
          </div>
        </div>
        <h2 className="description-title">Description</h2>
        <div className="description">{description}</div>
      </div>
    </>
  );
};

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.shape({}),
    title: PropTypes.string,
  }),
};

export default ProductDetail;
