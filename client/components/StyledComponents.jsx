import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import AmazonEmber from '../styles/fonts/AmazonEmber_Rg.ttf';
import AmazonEmberBold from '../styles/fonts/AmazonEmber_Bd.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmber}') format('truetype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmberBold}') format('truetype');
    font-weight: bold;
  }
  body {
    font-family: 'Amazon Ember', Arial, sans-serif;

  }
  
  .review-wrapper {
    margin-left: 70px;
  }

  .gray {
    color: #555;
  }

  .lightgray {
    color: #767676;
  }

  .orange {
    color: #c45500;
  }

  .blue {
    color: #0066c0;
  }

  .flex-left-center {
    display: flex;
    align-items: center;
  }
`;

const StyledButton = styled.button`
    font-size: 1em;
    font-family: inherit;
    text-align: center;
    background: linear-gradient(#fff, #dddfe2);
    border: solid 1px #bbb;
    border-radius: 2px;
    width: 100%;
    padding: 5px 0;
    box-shadow: inset 0 0 0 0px rgb(0, 0, 0, 0.5);
`;
export {GlobalStyles, StyledButton};