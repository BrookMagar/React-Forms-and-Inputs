import React, { Component } from 'react';
import './App.css';
// import PostList from './posts/PostList';
import FormsAndInputs from './screens/FormsAndInputs';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FormsAndInputs />
       {/* <PostList /> */}
      </div>
    );
  }
}

export default App;
