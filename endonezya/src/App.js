import logo from './logo.svg';
import './App.css';
import  React from 'react';
import ReactDOM from 'react-dom';

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = { langguage = 'python' };
  }

  render() {
    return <h1>{this.state.langguage}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root1'));