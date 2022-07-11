import React, {Component} from 'react';

export default class ComponentClass extends Component {
  state = {
    count: 0,
  };

  typeComponent = 'Class';

  logged = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  render() {
    return (
      <div className='container'>
        <p>{this.typeComponent} {this.state.count}</p>
        <button onClick={this.logged}>Component</button>
      </div>
    );
  }
}
