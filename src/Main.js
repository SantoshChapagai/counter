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
  // removeOneHandler = () => {
  //   this.setState({
  //     counter: Math.max(this.state.counter - 1, 0),
  //   });
  // }
  removeOneHandler = () => {
    if (this.state.counter >= 1) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }
  removeFiveHandler = () => {
    if (this.state.counter >= 5) {
      this.setState({
        counter: this.state.counter - 5
      })
    }
  }
  // removeFiveHandler = () => {
  //   this.setState({
  //     counter: Math.max(this.state.counter - 5, 4),
  //   });
  // }
  render() {
    let circleClass = '';
    if (this.state.counter === 0) {
      circleClass = 'circle';
    } else if (this.state.counter % 2 === 0) {
      circleClass = 'even';
    } else {
      circleClass = 'odd';
    }
    return (
      <div className='main'>
        <div className={circleClass}><h1>{this.state.counter}</h1></div>
        <div className='button'>
          <Button click={this.addFiveHandler} text="Add 5" />
          <Button click={this.addOneHandler} text="Add 1" />
          <Button click={this.resetHandler} text="Reset" />
          <Button click={this.removeOneHandler} text="Remove 1" />
          <Button click={this.removeFiveHandler} text="Remove 5" />
        </div>
      </div>
    );
  }
}


export default Main;