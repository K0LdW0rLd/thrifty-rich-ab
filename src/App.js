import React, {Component} from 'react';
import './App.css';
import Header from "./Directory/Header";

class App extends Component {
  render () {
    return (
      <div className='app-overall app-color'>
          <Header />
      </div>
    );
  }
}

export default App;
