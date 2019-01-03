import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import AmazonEmber from '../styles/fonts/AmazonEmber_Rg.ttf';
import AmazonEmberBold from '../styles/fonts/AmazonEmber_Bd.ttf';
import sprites from '../styles/sprites.png';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amazon Ember';
    src: url('https://s3-us-west-1.amazonaws.com/crackling-iceberg-lettuce-120/assets/fonts/AmazonEmber_Rg.ttf') format('truetype');
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

  .selected-glow {
    box-shadow: 0 0 10px 1px rgb(230, 115, 34, 0.7);
    border: solid 1px rgb(230, 115, 34);
  }

  .selected-line {
    border: solid 2px orange;
    border-radius: 3px;
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

const Sprite = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-image: url('https://s3-us-west-1.amazonaws.com/crackling-iceberg-lettuce-120/assets/sprites.png');
    background-size: 401px;
    background-repeat: no-repeat;
  }
`;

const StyledLink = styled.a`
  color: #0066c0;
  font-size: 13px;
  text-decoration: none;

  :hover {
    color: #c45500;
    text-decoration: underline;
  }
`;

export {GlobalStyles, StyledButton, Sprite, StyledLink};