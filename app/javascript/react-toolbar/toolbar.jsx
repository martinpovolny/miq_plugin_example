import React from 'react';
import ReactDOM from 'react-dom';

export class Credentials extends React.Component {
  constructor(props){
    super(props);
    this.component = props.component.component;
  }

  handleButtonClick() {
    console.log(this.component.api.getItems());
  }

  render(){
    return (
      <div>
        <button onClick={event => this.handleButtonClick()}>Click me!</button>
      </div>
    )
  }
}
