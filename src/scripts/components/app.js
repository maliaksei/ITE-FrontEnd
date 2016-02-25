import React from 'react';
import { Link } from 'react-router'
import StartTop from './start-top'

class App extends React.Component {

  render() {
    return (
      <div>
        <StartTop/>
        <h1>App</h1>
        <Link to={`/home`}>home</Link><br />
        <Link to={`/about`}>about</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }

}

export default App;
