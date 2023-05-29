import React from 'react';
import avatar from '../assets/images/oroz.jpg';
const BothMe = () => {
  return (
    <div className='both-me'>
      <h1>Обо мне</h1>
      <h4>Жумабек уулу Орозбек</h4>
      <div className='image'>
        <img src={avatar} alt="" />
      </div>
      <p>дата рождение: 1991г 21-марта</p>
      <p>телефон номер: +996559210390</p>
      <p>email: oroz7307@gmail.com</p>
      <p>telegramm: @mr_oroz</p>
      <p>githab: <a target='_blank' href="https://github.com/mr-oroz">mr-oroz</a></p>
      <p>linkedin: <a target='_blank' href="https://www.linkedin.com/in/orozbek-jumabek-uulu-3b2981174/">linkedin</a></p>
      <p>семейное положение: женат</p>
      <p style={{width: 300}}>Универсальный разработчик внешнего интерфейса с более чем 3-летним опытом проектирования, разработки и управления сложными сайтами электронной коммерции и внутренними структурами</p>
    </div>
  );
};

export default BothMe;