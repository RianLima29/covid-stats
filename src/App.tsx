import React from 'react';
import Header from './components/containers/Header';
import CountryStatsList from './components/CountryStatsList';

function App() {
  return (
    <>
      <Header title='Covid Status' logo='https://www.un.org/sites/un2.un.org/files/2020/04/covid-19.svg'/>
      <CountryStatsList/>
    </>
  );
}

export default App;
