import React from 'react';
import ComponentClass from './components/ClassComponent';
import {LifeCycle} from './components/LifeCycle/LifeCycle';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <ComponentClass min={1} max={100} />
        <LifeCycle field />
      </div>
    );
  }
}
