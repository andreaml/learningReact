import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './shared/components/Header';
import Content from './shared/components/Content';
import Footer from './shared/components/Footer';

import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          Hola
          <Calculator />
        </Content>
        <Footer copyright="&copy; Codejobs 2018" />
      </div>
    );
  }
}

export default App;
