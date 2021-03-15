// Globals
import "./styles.scss";
import React, { useState, useEffect } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  const [secondReader, setSecondReader] = useState('00');
  const [minuteReader, setMinuteReader] = useState('0'); //m:ss

  const defaultCountDown = 60;

  // TODO: implement counter...
  const startTimer = () => {
    setIsRunning(true);
    setCounter(defaultCountDown);
  }

  const resetTimer = () => {
    setIsRunning(true);
    setCounter(defaultCountDown);
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const sCounter = counter % 60;
        const mCounter = Math.floor(counter / 60);
        // I cast my previous variables to handle the length of seconds and minutes
        const secString = String(sCounter).length === 1 ? `0${sCounter}` : sCounter;
        const mString = String(mCounter).length === 1 ? `0${mCounter}` : mCounter;

        setSecondReader(secString);
        setMinuteReader(mString);
        // set my counterdown interval update by -1 
        setCounter(counter => counter - 1);
        //stop conter else timing is 1 second
        if (counter <= 0) {
          setIsRunning(false)
        }
      }, 1000);
    }

    return () => clearInterval(interval)
  }, [isRunning, counter])// my useEffect second argument will run only if isRunning and counter change

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{minuteReader}:{secondReader}</div>
        {!isRunning ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={() => startTimer()}>Start</Button>
          <Button onClick={() => resetTimer()}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
