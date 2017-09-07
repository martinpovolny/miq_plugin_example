import * as React from 'react';

export default class HalloReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'neni tu'};
  };

  componentDidMount() {
    ManageIQ.angular.rxSubject.subscribe((event) => {
      var eventType = event.type;

      if (eventType === 'demo') {
        this.setState({message: 'uz je tu'});
      }
    });
  };

  render() {
    return (
      <div>Hallo from React { this.state.message }</div>
    )
  }
}
