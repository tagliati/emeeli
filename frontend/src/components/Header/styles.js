import styled from 'styled-components';
import logo from '../../assets/img/Logo_ML.png';

const HeadBlock = styled.header`
  padding: 10px 0;
  background-color: #ffe600;

  .header-align {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-right: 20px;
    flex-grow: 1;
    background-image: url(${logo});
    height: 36px;
    width: 57px;
    display: flex;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;
export default HeadBlock;
