import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ComponentClass extends Component {
  static propTypes = {
    str: PropTypes.string,
  };

  render() {
    console.log('--------------');
    console.log('ComponentClass');
    return <p>{this.props.str}</p>;
  }
}
