import React, { Component } from 'react';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
