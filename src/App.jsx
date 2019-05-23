import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { HelloWorld } from 'lerna-poc-app-2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HelloWorld title="Hello from React webpack (app 1)" />;
  }
}

export default hot(App);
