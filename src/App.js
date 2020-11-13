import React, { Component } from 'react';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 justify-content-center my-5">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
