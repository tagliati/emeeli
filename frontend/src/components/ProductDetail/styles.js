import styled from 'styled-components';

const ProductDetailBlock = styled.div`
  .info {
    display: flex;
    flex-wrap: wrap;
    .box-image {
      flex-basis: 70%;
      .image {
        width: 100%;
        height: auto;
      }
    }
    .box-content {
      flex-basis: 30%;
      padding-left: 16px;
      .status {
        font-size: 14px;
      }
      .title {
        font-size: 24px;
        margin-bottom: 18px;
        margin-top: 10px;
        line-height: 24px;
      }
      .price {
        font-size: 46px;
        margin-bottom: 32px;
        display: block;
      }
      .buy {
        display: block;
        background-color: #3483fa;
        color: #ffffff;
        border: none;
        width: 100%;
        padding: 12px 0;
        border-radius: 5px;
        font-size: 18px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .description-title {
    margin-bottom: 32px;
    font-size: 28px;
  }
  .description {
    font-size: 16px;
    width: 70%;
  }
`;
export default ProductDetailBlock;
