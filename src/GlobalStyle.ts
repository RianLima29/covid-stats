import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }


`;
export const ContentContainer = styled.div`
  min-height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  align-items: start;
  justify-content: start;
  max-width: 100%;
  padding: 15px;
  background-color: #3F4E4F;
`;

export default GlobalStyle;
