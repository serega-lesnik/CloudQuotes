import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Quotes from './components/Quotes';

const App = () => {
return(
  <div>
    <header>Header</header>
    <Routes>
      <Route exact path='/' element={<About />} />
      <Route path='/quotes' element={<Quotes />} />
    </Routes>
  </div>
);
};

export default App;