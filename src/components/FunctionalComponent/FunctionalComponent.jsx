import React, {useState} from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';

export const FunctionalComponent = ({min, max}) => {
  const getRandomNumber = () => Math.floor(Math.random() * max - min) + min;
  const getStartMessage = () => `Угадайте число от ${min} до ${max}`;
  const [gameState, setGameState] = useState({
    randomNumber: getRandomNumber(),
    userNumber: '',
    newGame: false,
    result: getStartMessage(),
    count: 0,
  });

  const handlerSubmit = event => {
    event.preventDefault();
    setGameState(({newGame, userNumber, randomNumber, count}) => {
      switch (true) {
        case newGame:
          return {
            randomNumber: getRandomNumber(),
            userNumber: '',
            newGame: false,
            result: getStartMessage(),
            count: 0,
          };
        case !userNumber || userNumber < min || userNumber > max:
          return {
            newGame,
            randomNumber,
            count,
            userNumber: '',
            result: `Введите число от ${min} до ${max}.`,
          };
        case userNumber > randomNumber:
          return {
            newGame,
            randomNumber,
            userNumber: '',
            result: `Загаданное число меньше ${userNumber}`,
            count: count + 1,
          };
        case userNumber < randomNumber:
          return {
            newGame,
            randomNumber,
            userNumber: '',
            result: `Загаданное число больше ${userNumber}`,
            count: count + 1,
          };
        default:
          return {
            count: count + 1,
            randomNumber,
            userNumber: '',
            newGame: true,
            result: `Вы угадали, занаданное число ${userNumber} за ${count + 1} попыток.`
          };
      }
    });
  };

  const handleChange = event => {
    setGameState({
      ...gameState,
      userNumber: event.target.value,
    });
  };

  return (
    <div className={style.game}>
      <p className={style.result}>{gameState.result}</p>
      <form onSubmit={handlerSubmit} className={style.form}>
        <label className={style.label} htmlFor='user_number'>
          Угадай число
        </label>
        <input
          disabled={gameState.newGame}
          value={gameState.userNumber}
          onChange={handleChange}
          className={style.input}
          type='number'
          id='user_number'
        />
        <button className={style.btn}>{gameState.newGame ? 'Сыграть еще' : 'Угадать'}</button>
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
