import React from "react";
import Header from "./components/containers/Header";
import CountryStatsList from "./components/CountryStatsList";
import StateStatsList from './components/StateStatsList'
import * as C from "./GlobalStyle";

function App() {
  return (
    <>
      <Header
        title="Covid Stats"
        logo="https://www.un.org/sites/un2.un.org/files/2020/04/covid-19.svg"
      />
      <C.ContentContainer>
        <CountryStatsList />
        <StateStatsList/>
      </C.ContentContainer>
    </>
  );
}

export default App;
