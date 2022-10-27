import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import User from "./user/User";

class App extends Component {
  state = {
    name: "React-Chat-Application"
  }

  onNameChange = name => {
    this.setState({ name: name });
  }

  render() {

    const {name} = this.state

    return <div className="App"> Hello {name}
    <User name={name} onNameChange={this.onNameChange}/>
    </div>;
  
  }
}

export default App;