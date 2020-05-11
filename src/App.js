import React, {Component} from 'react';
import './App.css';
import Header from "./Directory/Header";
import Footer from './Directory/Footer';

class App extends Component {
  render () {
    return (
      <div className='app-overall'>
          <Header />
          <Footer />
      </div>
    );
  }
}

export default App;
