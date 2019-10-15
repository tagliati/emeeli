import styled from 'styled-components';

const ProductCard = styled.div`
  padding: 16px 0;
  display: flex;
  border-bottom: solid 1px #eeeeee;

  .image {
    display: inherit;
    width: 180px;
  }

  .image-link {
    width: 180px;
    height: 180px;
    display: block;
    overflow: hidden;
    border-radius: 4px;
  }
  .box-content {
    margin-left: 16px;
    flex-basis: 60%;
    .price {
      font-size: 24px;
      margin-top: 10px;
      margin-bottom: 12px;
    }
    .paid-shipping {
      display: none;
    }
    .free-shipping {
      width: 18px;
      height: 18px;
      margin-left: 16px;
      display: inline-block;
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
      background: url('../../assets/img/ic_shipping.png');
      @media (-webkit-min-device-pixel-ratio: 2) {
        background-image: url('../../assets/img/ic_shipping@2x.png.png');
      }
    }
    .product-link {
      text-decoration: none;
      .title {
        font-size: 18px;
        color: #333;
        font-weight: 400;
        margin: 0;
      }
    }
  }
  .location {
    font-size: 12px;
    margin-top: 37px;
    padding-left: 20px;
  }
`;
export default ProductCard;
