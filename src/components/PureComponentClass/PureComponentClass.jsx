import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class PureComponentClass extends PureComponent {
  static propTypes = {
    pure: PropTypes.string,
  };

  render() {
    console.log('--------------');
    console.log('PureComponentClass');
    return <p>{this.props.pure}</p>;
  }
}
