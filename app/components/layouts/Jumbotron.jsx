import React, { useEffect } from 'react';
import img from '../../assets/img/leonardo_torrealba.png';
import writeTextAnimation from '../../utils/writeTextAnimation';
import '../../styles/Jumbotron.scss';

export default function Jumbotron() {
  useEffect(() => {
    const words = [
      'Hello World!',
      'Web Developer',
      'LeoScript',
    ];
    writeTextAnimation(words, 'text');
  }, []);

  return (
    <div className="jumbotron">
      <div className="jumbotron__container">
        <h1 className="title">Leonardo Torrealba</h1>
        <div className="console">
          <span id="text" />
          <span id="cursor">_</span>
        </div>
      </div>
      <div className="jumbotron__container">
        <div className="jumbotron-img">
          <img src={img} alt="Foto de Leonardo Torrealba" />
        </div>
      </div>
    </div>
  );
}
