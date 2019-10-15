import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './styles';

const Card = ({ product }) => {
  const { id, picture, price, title, free_shipping, location } = product;

  const shippingElement = free_shipping ? 'free-shipping' : 'paid-shipping';

  return (
    <ProductCard className="card">
      <div className="box-image">
        <Link className="image-link" to={`/product/${id}`}>
          <img className="image" src={picture} alt={title} />
        </Link>
      </div>
      <div className="box-content">
        <div className="price">
          {`${price.currency} ${price.amount}`}
          <span className={`${shippingElement}`}>Shipping</span>
        </div>
        <Link to={`/product/${id}`} className="product-link">
          <h2 className="title">{title}</h2>
        </Link>
      </div>
      <div className="location">{location}</div>
    </ProductCard>
  );
};

Card.defaultProps = {
  product: {},
};

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.shape({}),
    title: PropTypes.string,
  }),
};

export default Card;
