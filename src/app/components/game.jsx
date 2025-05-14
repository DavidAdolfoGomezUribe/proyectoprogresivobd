"use client"
import React, { useState, useEffect } from 'react';
import  questions  from '@/app/data/questions.json';
import Question from './Question';
import Timer from './Timer';
import Lives from './Lives';
import GameOver from './GameOver';

const MAX_TIME = 120;

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState(null);

  useEffect(() => {
    if (timeLeft <= 0 || lives <= 0) {
      setGameOver(true);
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, lives]);

  const handleAnswer = (selected) => {
    const correct = questions[currentIndex].answer;
    const isCorrect = selected === correct;

    if (isCorrect) {
      setTimeLeft(prev => Math.min(prev + 10, MAX_TIME));
      setFeedbackColor('green');
    } else {
      setLives(prev => prev - 1);
      setFeedbackColor('red');
    }

    setTimeout(() => {
      setFeedbackColor(null);
      setCurrentIndex(prev => prev + 1);
    }, 1000);
  };

  if (gameOver || currentIndex >= questions.length) {
    return <GameOver />;
  }

  /* ESTADO: */
  const [progress, setProgress] = useState([]); // array de 'correct' o 'incorrect'
  const handleAnswerProgress = (isCorrect) => {
    setProgress((prev) => [...prev, isCorrect ? 'correct' : 'incorrect']);
    // seguir con lógica de avanzar pregunta
  };


  return (
    <div className="game">
      <Timer time={timeLeft} />
      <Lives count={lives} />
      <Question 
        data={questions[currentIndex]} 
        onAnswer={handleAnswer} 
        feedbackColor={feedbackColor}
      />
    </div>
  );
};

export default Game;
