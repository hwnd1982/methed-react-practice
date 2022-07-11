import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

export let ComponentFunc = (props) => {
  console.log('--------------');
  console.log('ComponentFunc');
  return <p className={style.text}>{props.func}</p>;
};

ComponentFunc.propTypes = {
  func: PropTypes.string
};

ComponentFunc = React.memo(ComponentFunc);
