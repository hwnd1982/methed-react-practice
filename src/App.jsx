import React, {Component} from 'react';
import randomWords from 'random-words';
import ComponentClass from './components/ComponentClass/ComponentClass';
import PureComponentClass from './components/PureComponentClass/PureComponentClass';
import ComponentFunc from './components/ComponentFunc';


export default class App extends Component {
  state = {
    str: randomWords(),
    pure: randomWords(),
    func: randomWords(),
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      switch (true) {
        case !(this.state.count % 3):
          this.setState({
            count: this.state.count + 1,
            func: randomWords()
          });
          break;
        case !(this.state.count % 2):
          this.setState({
            count: this.state.count + 1,
            str: randomWords()
          });
          break;
        default:
          this.setState({
            count: this.state.count + 1,
            pure: randomWords()
          });
      }
    }, 3000);
  }

  render() {
    console.clear();
    console.log(this.state.count);
    return (
      <header className="App-header">
        <ComponentClass str={this.state.str}/>
        <PureComponentClass pure={this.state.pure}/>
        <ComponentFunc func={this.state.func}/>
      </header>
    );
  }
}
