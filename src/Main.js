import React, { Component } from 'react';
import './Main.css';
import Button from './UI/Button'


class Main extends Component {
  state = {
    counter: 0,
  };

  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  }
  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  }
  removeOneHandler = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  removeFiveHandler = () => {
    this.setState({
      counter: this.state.counter - 5,
    });
  }
  render() {
    return (
      <div className='main'>
        <h1>{this.state.counter}</h1>
        <Button click={this.addFiveHandler} text="Add 5" />
        <Button click={this.addOneHandler} text="Add 1" />
        <Button click={this.resetHandler} text="Reset" />
        <Button click={this.removeOneHandler} text="Remove 1" />
        <Button click={this.removeFiveHandler} text="Remove 5" />
      </div>
    );
  }
}


export default Main;