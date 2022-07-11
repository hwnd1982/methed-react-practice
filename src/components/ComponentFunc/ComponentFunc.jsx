import React from 'react';
import PropTypes from 'prop-types';

let ComponentFunc = (props) => {
  console.log('--------------');
  console.log('ComponentFunc');
  return <p>{props.func}</p>;
};

ComponentFunc.propTypes = {
  func: PropTypes.string
};

ComponentFunc = React.memo(ComponentFunc);

export default ComponentFunc;
