import React from 'react';

import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

import '../public/main.css';

const App = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
)

export default App;