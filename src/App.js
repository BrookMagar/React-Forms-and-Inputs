import React, { Component } from 'react';
import './App.css';
// import PostList from './posts/PostList';
// import Toggle from './screens/ToggleRenderProps';
// import FormsAndInputs from './screens/FormsAndInputs';
import Help from './screens/Help'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Help />
      {/* <FormsAndInputs /> */}
       {/* <PostList /> */}
      </div>
    );
  }
}

export default App;
