import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/product/:id" component={Product} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
}

export default App;
