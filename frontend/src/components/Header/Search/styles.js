import styled from 'styled-components';
import searchIcon from '../../../assets/img/ic_Search.png';
import searchIcon2x from '../../../assets/img/ic_Search@2x.png.png';

const SearchBlock = styled.form`
  flex-basis: 100%;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  .input {
    width: 100%;
    border: none;
    line-height: 40px;
    text-indent: 10px;
    padding-right: 50px;
    outline: none;
  }

  .button {
    width: 35px;
    height: 100%;
    display: inline-block;
    border: none;
    position: absolute;
    outline: none;
    cursor: pointer;
    right: 0;
    background-repeat: no-repeat;
    background-color: #eee;
    background-position: center;
    background-image: url(${searchIcon});

    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(${searchIcon2x});
    }
  }
`;

export default SearchBlock;
