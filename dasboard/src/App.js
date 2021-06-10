import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import TopHeader from './Components/TopHeader.js';
const App = () => {
  return (
    <div>
    <TopHeader />
    <Header />
    <Main/>
    </div>
  );
}

export default App;