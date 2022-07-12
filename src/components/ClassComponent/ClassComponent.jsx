import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
  };

  isNumber = num => !isNaN(parseFloat(num)) && isFinite(num);
  getRandomNumber = () => Math.floor(Math.random() * this.props.max - this.props.min) + this.props.min;
  getStartMessage = () => `Угадайте число от ${this.props.min} до ${this.props.max}`;

  state = {
    result: this.getStartMessage(),
    userNumber: '',
    randomNumber: this.getRandomNumber(),
    count: 0,
    isNewGame: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({count: state.count + 1}));
    this.setState(state => {
      if (state.isNewGame) {
        return {
          result: this.getStartMessage(),
          userNumber: '',
          randomNumber: this.getRandomNumber(),
          count: 0,
          isNewGame: false,
        };
      }

      if (!state.userNumber || !this.isNumber(state.userNumber)) {
        return {
          result: `Введите число...`,
          userNumber: '',
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загодоного`,
          userNumber: ''
        };
      }
      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загодоного`,
          userNumber: ''
        };
      }

      return {
        result: `Вы удали, загаданое число ${state.randomNumber}, количество попыток ${state.count}`,
        userNumber: '',
        isNewGame: true,
      };
    });
  };

  handleChange = event => this.setState(() => ({userNumber: event.target.value}));

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.userNumber}
            disabled={this.state.isNewGame}
            className={style.input}
            type='number'
            id='user_number'
          />
          <button className={style.btn}>{this.state.isNewGame ? 'Сыграть ещё' : 'Угадать'}</button>
        </form>
      </div>
    );
  }
}
